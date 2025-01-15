import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Helmet } from "react-helmet";
import { FaCalendarDay, FaUser } from "react-icons/fa6";

const SingleBlog = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          `https://test.rnshopbd.com/wp-json/wp/v2/posts?slug=${slug}&_embed`
        );
        const data = await response.json();
        const postData = data[0];
        setPost({
          id: postData.id,
          title: postData.title.rendered,
          author: postData._embedded?.author?.[0]?.name || "Unknown",
          date: new Date(postData.date).toLocaleDateString(),
          content: postData.content.rendered,
          image: postData.fimg_url || "/api/placeholder/800/400",
          metaDescription: postData.excerpt.rendered,
        });
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchPost();
  }, [slug]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Helmet>
        <title>{post.title}</title>
        <meta name="description" content={post.metaDescription} />
      </Helmet>

      <div className="text-center py-8 bg-[#F4F4F4]">
        <h1 className="text-4xl font-bold">{post.title}</h1>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <img src={post.image} alt={post.title} />
        <div className="p-4">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <FaUser className="w-4 h-4 mr-1" />
              <span className="mr-4">{post.author}</span>
            </div>
            <div className="flex items-center space-x-1">
              <FaCalendarDay className="w-4 h-4 mr-1" />
              <span>{post.date}</span>
            </div>
          </div>
        </div>

        <div className="bg-[#F4F4F4] py-12 px-8 mb-5">
          <div
            className="text-gray-800 text-lg leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
