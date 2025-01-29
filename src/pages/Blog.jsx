import Banner from "../components/shared/Banner";
import bg from "../assets/images/Blog-banner.jpg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/shared/Seo";
import { FaCalendar, FaUser } from "react-icons/fa6";

const Blog = () => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 20;

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          "https://blog.falconxsecurity.com/wp-json/wp/v2/posts?per_page=100&_embed"
        );
        const data = await response.json();
        console.log(data);

        const formattedData = data.map((post) => {
          const featuredImage =
            post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

          const plainExcerpt = post.excerpt.rendered
            .replace(/(<([^>]+)>)/gi, "")
            .replace(/&nbsp;/g, " ")
            .replace(/&#8217;/g, "'")
            .replace(/&#8216;/g, "'")
            .replace(/&hellip;/g, "...")
            .replace(/[\u2026]/g, "...")
            .trim();

          const maxExcerptLength = 300;
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
      <SEO title="Blog - Best Security Guard Service Company" />
      <Banner title="BLOG" backgroundImage={bg} bgclass="bg-right" />

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="space-y-8">
          {" "}
          {/* Use space-y-8 for vertical gaps */}
          {currentArticles.map((article) => (
            <Link to={`/${article.slug}`} key={article.id}>
              <div className="bg-white mb-5 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 duration-200 flex flex-col lg:flex-row">
                {/* Image on the left */}
                <div className="w-full lg:w-1/3 h-64">
                  <img
                    src={article.featuredImage}
                    alt={article.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = "/api/placeholder/400/300";
                      console.log(
                        "Image failed to load:",
                        article.featuredImage
                      );
                    }}
                  />
                </div>

                {/* Content on the right */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {article.title}
                  </h3>
                  <div className="flex items-center text-sm text-gray-600 mb-4">
                    <FaUser className="w-4 h-4 mr-1" />
                    <span className="mr-4">admin</span>
                    <FaCalendar className="w-4 h-4 mr-1" />
                    <span>{article.date}</span>
                  </div>
                  <p className="text-gray-700 mb-4">{article.excerpt}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
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
  );
};

export default Blog;
