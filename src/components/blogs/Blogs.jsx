import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Blogs.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setBlogs(data.blogs))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleBlogClick = (blog) => {
    navigate(`/blog/${blog.id}`, { state: { blog } });
  };

  return (
    <div className="blogs-container">
      <h1>Our Blogs</h1>
      <Carousel
        responsive={responsive}
        showDots={false}
        arrows={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
      >
        {blogs.map((blog) => (
          <div key={blog.id} className="carousel-blog-item" onClick={() => handleBlogClick(blog)}>
            <div className="blog-item-card">
              <img
                src={`${process.env.PUBLIC_URL}/${blog.image}`}
                alt={blog.title}
                className="carousel-blog-image"
              />
              <h2>{blog.title}</h2>
              <p>{blog.summary}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Blogs;
