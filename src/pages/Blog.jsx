import Banner from "../components/shared/Banner";
import bg from "../assets/images/Blog-banner.jpg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/shared/Seo";
import { FaCalendar, FaUser } from "react-icons/fa6";

const Blog = () => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        // Add ?_embed to get embedded media data
        const response = await fetch(
          "https://falconxsecurity.com/wp-json/wp/v2/posts?per_page=100&_embed"
        );
        const data = await response.json();
        console.log(data);

        const formattedData = data.map((post) => {
          // Get the featured image URL from the _embed structure
          const featuredImage =
            post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

          // Clean the excerpt
          const plainExcerpt = post.excerpt.rendered
            .replace(/(<([^>]+)>)/gi, "") // Remove HTML tags
            .replace(/&nbsp;/g, " ") // Replace non-breaking spaces with regular spaces
            .replace(/&#8217;/g, "'") // Replace right single quotation mark
            .replace(/&#8216;/g, "'") // Replace left single quotation mark
            .replace(/&hellip;/g, "...") // Replace &hellip; with ellipsis
            .replace(/[\u2026]/g, "...") // Replace unicode ellipsis with ellipsis
            .trim(); // Trim whitespace

          const maxExcerptLength = 300; // Set your desired length here
          const excerpt =
            plainExcerpt.length > maxExcerptLength
              ? `${plainExcerpt.slice(0, maxExcerptLength)}...`
              : plainExcerpt;

          return {
            id: post.id,
            title: post.title.rendered,
            author: post._embedded?.author?.[0]?.name || "Unknown",
            date: new Date(post.date).toLocaleDateString(),
            excerpt: excerpt,
            featuredImage: featuredImage || "/api/placeholder/400/300",
            slug: post?.slug,
          };
        });
        setArticles(formattedData);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  const totalPages = Math.ceil(articles.length / articlesPerPage);
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <SEO title="Blog - Best Security Guard Service California" />
      <Banner title="BLOG" backgroundImage={bg} bgclass="bg-right" />

      <div>
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="space-y-4">
            {currentArticles.map((article) => (
              <div
                key={article.id}
                className="bg-[#F4F4F4] rounded-lg overflow-hidden shadow-lg flex flex-col lg:flex-row"
              >
                <div className="w-full lg:w-1/3 h-64 lg:h-auto">
                  <img
                    src={article.featuredImage}
                    alt={article.title}
                    className="w-full h-60 object-cover"
                    onError={(e) => {
                      e.target.src = "/api/placeholder/400/300";
                      console.log(
                        "Image failed to load:",
                        article.featuredImage
                      );
                    }}
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">
                      <Link
                        to={`/${article.slug}`}
                        dangerouslySetInnerHTML={{ __html: article.title }}
                      />
                    </h3>
                    <div className="flex items-center text-sm text-gray-600 mb-4">
                      <FaUser className="w-4 h-4 mr-1" />
                      <span className="mr-4">{article.author}</span>
                      <FaCalendar className="w-4 h-4 mr-1" />
                      <span>{article.date}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center mt-8 space-x-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`px-4 py-2 rounded-full border text-sm font-semibold transition-all ${
                  currentPage === index + 1
                    ? "bg-blue-900 text-white"
                    : "bg-white text-blue-900 border-blue-900 hover:bg-blue-900 hover:text-white"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
