import Banner from "../components/shared/Banner";
import { User, Calendar } from "lucide-react";
import bg from "../assets/images/Blog-banner.jpg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import SEO from "../components/shared/Seo";

const Blog = () => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  // Fetch posts from WordPress API
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          "https://test.rnshopbd.com/wp-json/wp/v2/posts?per_page=20&_embed"
        );
        const data = await response.json();
        const formattedData = data.map((post) => ({
          id: post.id,
          title: post.title.rendered,
          author: post._embedded?.author?.[0]?.name || "Unknown",
          date: new Date(post.date).toLocaleDateString(),
          category: post.categories?.[0] || "Uncategorized",
          comments: post.comment_count || 0,
          content: post.content.rendered
            .replace(/(<([^>]+)>)/gi, "")
            .slice(0, 100), // Shorten the content to 100 characters
          image: post.fimg_url || "/api/placeholder/400/300",
          tag: post.tags?.[0] || "No Tags",
          slug: post.slug, // Get the post slug for the link
        }));
        setArticles(formattedData);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  // Calculate total pages
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  // Get current page articles
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <SEO title="Blog - Best Security Guard Service California" />
      <Banner title="BLOG" backgroundImage={bg} bgclass="bg-right" />

      <div>
        <div className="max-w-6xl mx-auto px-4 py-16">
          {/* Blog List */}
          <div className="space-y-4">
            {currentArticles.map((article) => (
              <div
                key={article.id}
                className="bg-[#F4F4F4] rounded-lg overflow-hidden shadow-lg flex flex-col lg:flex-row"
              >
                {/* Image Section */}
                <div className="w-full lg:w-1/3 h-64 lg:h-auto">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-60 object-cover"
                  />
                </div>

                {/* Content Section */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Title as a link to single blog page */}
                    <h3 className="text-2xl font-bold mb-4">
                      <Link to={`/${article.slug}`}>{article.title}</Link>
                    </h3>
                    <div className="flex items-center text-sm text-gray-600 mb-4">
                      <User className="w-4 h-4 mr-1" />
                      <span className="mr-4">{article.author}</span>
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{article.date}</span>
                    </div>
                    {/* Short Description */}
                    <p className="text-gray-600 mb-4">{article.content}...</p>
                  </div>
                </div>
              </div>
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
    </div>
  );
};

export default Blog;
