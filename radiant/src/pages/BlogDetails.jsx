import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./Blog.css";

const BlogDetails = () => {
  const { id } = useParams();

  // ✅ Blog posts will come from LocalStorage (saved from BlogList.jsx)
  const posts = JSON.parse(localStorage.getItem("radiant_blog_posts")) || [];
  const post = posts.find((p) => p.id === id);

  // ✅ reveal animation
  useEffect(() => {
    const reveal = () => {
      const reveals = document.querySelectorAll(".reveal");
      reveals.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 120;

        if (elementTop < windowHeight - elementVisible) el.classList.add("active");
      });
    };

    window.addEventListener("scroll", reveal);
    reveal();
    return () => window.removeEventListener("scroll", reveal);
  }, []);

  if (!post) {
    return (
      <div className="blogNotFound">
        <h2>Blog not found 😢</h2>
        <Link to="/blog" className="backBtn">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="blogDetailsWrap">
      {/* ✅ HERO */}
      <section className="blogDetailsHero">
        <div className="blogDetailsInner">
          <Link to="/blog" className="backBtn reveal">
            ← Back to Blog
          </Link>

          <p className="blogHeroBadge reveal">{post.category}</p>

          <h1 className="blogDetailsTitle reveal">{post.title}</h1>

          <p className="blogDetailsMeta reveal">
            By <b>{post.author}</b> • {post.date} • {post.readTime}
          </p>
        </div>
      </section>

      {/* ✅ CONTENT */}
      <section className="blogDetailsSection">
        <div className="blogDetailsContainer">
          <div className="blogDetailsCover reveal">
            <img src={post.cover} alt={post.title} />
          </div>

          <article className="blogContent reveal">
            {post.content.map((block, index) => {
              if (block.type === "h2") return <h2 key={index}>{block.text}</h2>;
              if (block.type === "h3") return <h3 key={index}>{block.text}</h3>;
              if (block.type === "p") return <p key={index}>{block.text}</p>;
              if (block.type === "ul")
                return (
                  <ul key={index}>
                    {block.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                );
              return null;
            })}
          </article>

          {/* ✅ CTA */}
          <div className="blogCTA reveal">
            <h3>Want to grow your business online?</h3>
            <p>
              Let Radiant Multimedia help you with SEO, marketing & automation solutions.
            </p>
            <Link to="/contact" className="ctaBtn">
              Get Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetails;
