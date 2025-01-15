import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";

import bg from "../assets/images/Group-7140-1.webp";

const BlogsList = () => {
  const [articles, setArticles] = useState([]);

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
          slug: post.slug,
          author: post._embedded?.author?.[0]?.name || "Unknown",
          date: new Date(post.date).toLocaleDateString(),
          category: post.categories?.[0] || "Uncategorized",
          comments: post.comment_count || 0,
          excerpt:
            post.excerpt.rendered.replace(/(<([^>]+)>)/gi, "").slice(0, 100) +
            "...",
          image: post.fimg_url || "/api/placeholder/400/300",
          tag: post.tags?.[0] || "No Tags",
        }));
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
        <h1 className="text-4xl font-bold text-center text-[#003366] mb-16">
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
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="mySwiper"
          >
            {articles.map((article) => (
              <SwiperSlide key={article.id}>
                <div className="w-full max-w-xs rounded-lg transform transition-transform hover:scale-105 relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className=" absolute inset-0 z-10"></div>
                  <div className="p-4 bg-white mx-1.5 -mt-4 z-20 relative">
                    <h3 className="text-lg font-bold mb-2 text-gray-800 truncate">
                      <a href={`/${article.slug}`} className="hover:underline">
                        {article.title}
                      </a>
                    </h3>
                    <div className="flex items-center text-sm text-gray-600 mb-2">
                      <span className="mr-4">{article.author}</span>
                      <span>{article.date}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      {article.excerpt}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default BlogsList;
