import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";

import bg from "../assets/images/Group-7140-1.webp";
import { FaCalendar } from "react-icons/fa6";
import { Link } from "react-router-dom";

const BlogsList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          "https://blog.falconxsecurity.com/wp-json/wp/v2/posts?per_page=16&_embed"
        );
        const data = await response.json();

        const formattedData = data.map((post) => {
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

          const maxExcerptLength = 100; // Set your desired length here
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
            slug: post.slug,
          };
        });
        setArticles(formattedData);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="py-16"
    >
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="md:text-4xl text-2xl font-bold text-center text-[#003366] mb-16">
          LATEST ARTICLES
        </h1>
        <div className="relative">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            className="mySwiper"
          >
            {articles.map((article) => (
              <SwiperSlide key={article.id}>
                <Link to={`/${article.slug}`}>
                  <div className="w-full max-w-lg rounded-lg transform transition-transform hover:scale-105 relative">
                    <img
                      src={article.featuredImage}
                      alt={article.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute inset-0 z-10"></div>
                    <div className="p-4 bg-white mx-1.5 -mt-4 z-20 relative rounded-b-lg shadow-lg">
                      <h3 className="text-lg font-bold mb-2 text-gray-800 truncate">
                        {article.title}
                      </h3>
                      <div className="flex items-center text-sm gap-1 text-gray-600 mb-2">
                        <FaCalendar />
                        <span>{article.date}</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-4">
                        {article.excerpt}
                      </p>
                    </div>
                  </div>{" "}
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default BlogsList;
