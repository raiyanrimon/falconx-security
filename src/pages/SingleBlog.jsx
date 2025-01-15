import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SEO from "../components/shared/Seo";
import { FaCalendar, FaUser } from "react-icons/fa";

const SingleBlog = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://falconxsecurity.com/wp-json/wp/v2/posts?slug=${slug}&_embed`
        );
        const data = await response.json();

        if (data.length > 0) {
          setPost(data[0]);
        }
      } catch (err) {
        setError("Failed to load blog post. Please try again later.");
        console.error("Error fetching post:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen text-red-500">
        {error}
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex justify-center items-center min-h-screen text-gray-500">
        Post not found
      </div>
    );
  }

  // Get featured image if available
  const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  return (
    <div className="max-w-6xl mx-auto my-4">
      <SEO
        title={post.title.rendered}
        description={post.excerpt.rendered
          .replace(/(<([^>]+)>)/gi, "")
          .slice(0, 160)}
        image={featuredImage}
      />

      {/* Post Title */}
      <div className="text-center bg-[#f5f5f5] p-6">
        <h1
          className="text-4xl font-bold "
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />
      </div>

      <div className=" px-4 py-8">
        {/* Featured Image */}
        {featuredImage && (
          <div className="mb-8">
            <img
              src={featuredImage}
              alt={post.title.rendered}
              className="w-full h-auto"
            />
          </div>
        )}

        {/* Post Meta */}
        <div className="flex justify-between items-center">
          <div className="flex gap-4 text-sm items-center text-gray-600 mb-8">
            <FaUser />
            <span>admin</span>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-8">
            <FaCalendar />
            <span>{new Date(post.date).toLocaleDateString()}</span>
          </div>
        </div>

        {/* Main Content - Preserving WordPress HTML structure */}
        <div
          className="wordpress-content bg-[#F5F5F5] p-4"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
      </div>

      {/* CSS to match WordPress styling */}
      <style jsx>{`
        .wordpress-content {
          /* Base styles */
          font-size: 16px;
          line-height: 1.6;
          color: #333;
        }

        .wordpress-content p {
          margin-bottom: 1.5em;
        }

        .wordpress-content h2 {
          font-size: 1.75em;
          font-weight: 700;
          margin: 1.5em 0 0.75em;
        }

        .wordpress-content h3 {
          font-size: 1.5em;
          font-weight: 600;
          margin: 1.25em 0 0.75em;
        }

        .wordpress-content ul {
          list-style-type: disc;
          margin-left: 2em;
          margin-bottom: 1.5em;
        }

        .wordpress-content li {
          margin-bottom: 0.5em;
        }

        .wordpress-content article {
          margin: 0;
          padding: 0;
        }

        .wordpress-content section {
          margin-bottom: 2em;
        }

        .wordpress-content strong {
          font-weight: 700;
        }

        /* Custom styles matching your specific content */
        .wordpress-content .wp-block-heading {
          font-weight: 600;
        }

        .wordpress-content header {
          margin-bottom: 2em;
        }

        /* FAQ section specific styling */
        .wordpress-content h2.wp-block-heading {
          margin-top: 2em;
          margin-bottom: 1em;
        }

        .wordpress-content h3.wp-block-heading {
          color: #444;
          margin-top: 1.5em;
        }

        /* Conclusion section styling */
        .wordpress-content section:last-child {
          margin-top: 2em;
          padding-top: 1em;
          border-top: 1px solid #eee;
        }
      `}</style>
    </div>
  );
};

export default SingleBlog;
