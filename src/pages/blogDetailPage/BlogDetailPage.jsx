import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./BlogDetailPage.css";

const BlogDetailPage = () => {
  const location = useLocation();
  const { blog } = location.state || {};
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (blog) {
      fetch("/data.json")
        .then((response) => response.json())
        .then((data) => {
          const related = data.blogs.filter((b) => b.id !== blog.id).slice(0, 3);
          setRelatedBlogs(related);
        })
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [blog]);

  const handleRelatedBlogClick = (relatedBlog) => {
    navigate(`/blog/${relatedBlog.id}`, { state: { blog: relatedBlog } });
  };

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <>
      <Navbar />
      <div className="blog-detail-container">
        <div className="blog-detail">
          <img
            src={`${process.env.PUBLIC_URL}/${blog.image}`}
            alt={blog.title}
            className="blog-image"
          />
          <div className="blog-info">
            <h1>{blog.title}</h1>
            {blog.content.split("\n\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="related-blogs">
          <h2>Related Blogs</h2>
          <div className="related-blogs-list">
            {relatedBlogs.map((relatedBlog) => (
              <div
                key={relatedBlog.id}
                className="related-blog-item"
                onClick={() => handleRelatedBlogClick(relatedBlog)}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/${relatedBlog.image}`}
                  alt={relatedBlog.title}
                  className="related-blog-image"
                />
                <h3>{relatedBlog.title}</h3>
                <p>{relatedBlog.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogDetailPage;
