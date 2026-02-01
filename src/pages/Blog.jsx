import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Blog.css";

const BlogList = () => {
  // ✅ Blog Data inside same file (NO blogData.js)
  const blogPosts = [
    {
      id: "seo-services-india",
      category: "SEO / Business Growth",
      date: "Jan 2026",
      readTime: "6 min read",
      title: "SEO Services for Business Growth in India",
      excerpt:
        "Your business needs to be visible on Google to attract genuine customers. SEO helps you generate organic leads and long-term business growth.",
      tags: ["SEO", "Google Ranking", "Business Growth"],
      author: "Radiant Multimedia",
      cover:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
      content: [
        {
          type: "p",
          text:
            "In today’s digital-first world, having a website is not enough. Your business needs to be visible on search engines like Google to attract genuine customers. This is where SEO (Search Engine Optimization) plays a crucial role."
        },
        { type: "h2", text: "What is SEO (Search Engine Optimization)?" },
        {
          type: "p",
          text:
            "SEO is the process of optimizing your website so that it ranks higher on search engines when potential customers search for your products or services. Effective SEO focuses on keyword research, website optimization, content, technical improvements, local SEO and performance tracking."
        },
        { type: "h2", text: "Why SEO is Important for Your Business" },
        { type: "h3", text: "1. Increases Website Visibility" },
        {
          type: "p",
          text:
            "Higher Google rankings mean more visibility and more potential customers discovering your business online."
        },
        { type: "h3", text: "2. Generates Quality Leads" },
        {
          type: "p",
          text:
            "SEO targets users who are actively searching for your services, resulting in higher conversion rates."
        },
        { type: "h3", text: "3. Builds Brand Credibility" },
        {
          type: "p",
          text:
            "Websites ranking on the first page of Google are perceived as more trustworthy and professional."
        },
        { type: "h3", text: "4. Cost-Effective Marketing" },
        {
          type: "p",
          text:
            "Unlike paid advertising, SEO delivers continuous results without paying for every click."
        },
        { type: "h3", text: "5. Long-Term Business Growth" },
        {
          type: "p",
          text:
            "SEO creates a strong digital foundation that supports sustainable business growth."
        },
        { type: "h2", text: "Key SEO Services Offered" },
        {
          type: "ul",
          items: [
            "Keyword Research & Strategy",
            "On-Page SEO Optimization (Meta tags, Headers, Content, Images, Linking)",
            "Technical SEO (Speed, Mobile, Crawl Errors, Sitemap/Robots)",
            "Local SEO (Google Business Profile optimization)",
            "Content Optimization (Blogs, Landing pages)"
          ]
        },
        { type: "h2", text: "Common SEO Mistakes Businesses Make" },
        {
          type: "ul",
          items: [
            "Targeting wrong keywords",
            "Ignoring technical SEO",
            "Keyword stuffing",
            "Poor website structure",
            "No local SEO focus"
          ]
        },
        { type: "h2", text: "Why Choose Radiant Multimedia for SEO?" },
        {
          type: "ul",
          items: [
            "Customized SEO strategies",
            "White-hat ethical SEO",
            "Transparent reporting",
            "Affordable plans",
            "Result-oriented approach"
          ]
        }
      ]
    },

    {
      id: "instagram-ai-translation",
      category: "Instagram / Updates",
      date: "Jan 2026",
      readTime: "4 min read",
      title: "Instagram Update: AI Translation, Dubbing & Lip Sync for Reels",
      excerpt:
        "Instagram Reels now support AI-powered translation, dubbing and lip-sync — helping creators reach global audiences with one video.",
      tags: ["Instagram", "Meta AI", "Reels"],
      author: "Radiant Multimedia",
      cover:
        "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1600&auto=format&fit=crop",
      content: [
        {
          type: "p",
          text:
            "Instagram and Facebook Reels now support AI-powered translation, dubbing and lip-syncing. Meta AI translates spoken audio into another language while preserving the creator’s tone and syncing mouth movements."
        },
        { type: "h2", text: "What’s New?" },
        {
          type: "ul",
          items: [
            "AI translates audio while preserving tone",
            "Lip-sync matches translated voice with mouth movement",
            "Supported languages: English ↔ Spanish, plus Hindi and Portuguese",
            "Creators can enable while uploading a Reel",
            "Viewers can choose “Don’t translate” to see original"
          ]
        },
        { type: "h2", text: "Why This Matters for Business" },
        {
          type: "ul",
          items: [
            "Reach more audience without recording multiple versions",
            "Higher engagement in native language",
            "Early adoption gives competitive advantage",
            "Useful for global client marketing"
          ]
        },
        { type: "h2", text: "Tips for Best Results" },
        {
          type: "ul",
          items: [
            "Use clear speech, good lighting and visible mouth",
            "Always preview translated version before posting",
            "Track analytics per language",
            "Add subtitles/text overlays for extra clarity"
          ]
        }
      ]
    },

    {
      id: "n8n-automation-tool",
      category: "Automation / AI Tools",
      date: "Jan 2026",
      readTime: "7 min read",
      title: "n8n Tool: Intelligent Workflow Automation for Businesses",
      excerpt:
        "n8n is like Zapier but more powerful. You can automate business workflows, connect APIs, and even build AI agents using RAG & AI nodes.",
      tags: ["n8n", "Automation", "AI Agents"],
      author: "Radiant Multimedia",
      cover:
        "https://images.unsplash.com/photo-1556155092-8707de31f9c4?q=80&w=1600&auto=format&fit=crop",
      content: [
        {
          type: "p",
          text:
            "Businesses today need automation to reduce repetitive work, improve decision-making, and scale without ballooning cost. n8n is an open/fair-code workflow automation platform offering strong customization and AI capabilities."
        },
        { type: "h2", text: "What is n8n?" },
        {
          type: "ul",
          items: [
            "Workflow automation tool like Zapier / Make",
            "Self-hosting supported for privacy and control",
            "500+ integrations including custom REST APIs"
          ]
        },
        { type: "h2", text: "Key AI Features in n8n" },
        {
          type: "ul",
          items: [
            "AI Agents / Multi-Agent Systems for multi-step tasks",
            "RAG (Retrieval Augmented Generation) for accurate answers using internal docs",
            "Visual workflow builder + AI prompt builder",
            "AI Transform Node (generate code/logic using prompt)",
            "Human-in-the-loop governance / safety controls"
          ]
        },
        { type: "h2", text: "Top Use Cases" },
        {
          type: "ul",
          items: [
            "Customer support automation",
            "Marketing/content automation",
            "Data sync / ETL / reporting",
            "IT operations automation",
            "Document/Knowledge base bots"
          ]
        },
        { type: "h2", text: "Advantages & Challenges" },
        {
          type: "ul",
          items: [
            "✅ Flexible low-code + code",
            "✅ Data control & privacy with self-host",
            "⚠ Learning curve for advanced workflows",
            "⚠ AI compute cost if not optimized"
          ]
        }
      ]
    }
  ];

  // ✅ Save blog posts into LocalStorage so BlogDetails can read
  useEffect(() => {
    localStorage.setItem("radiant_blog_posts", JSON.stringify(blogPosts));
  }, []);

  // ✅ Reveal Animation
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

  return (
    <div className="blogWrap">
      {/* ✅ HERO */}
      <section className="blogHero">
        <div className="blogHeroInner">
        
          <h1 className="blogHeroTitle">
            Latest Insights for <span>Business Growth</span>
          </h1>
          <p className="blogHeroSub">
            SEO, Instagram Updates, Automation Tools & Growth Strategies — all in one place.
          </p>
        </div>
      </section>

      {/* ✅ BLOG LIST */}
      <section className="blogSection">
        <div className="blogContainer">
          <h2 className="blogSectionTitle reveal">Latest Articles</h2>

          <div className="blogGrid">
            {blogPosts.map((post) => (
              <Link to={`/blog/${post.id}`} className="blogCard reveal" key={post.id}>
                <div className="blogCover">
                  <img src={post.cover} alt={post.title} />
                </div>

                <div className="blogCardBody">
                  <div className="blogMeta">
                    <span className="chip">{post.category}</span>
                    <span className="muted">
                      {post.date} • {post.readTime}
                    </span>
                  </div>

                  <h3 className="blogTitle">{post.title}</h3>
                  <p className="blogExcerpt">{post.excerpt}</p>

                  <div className="tagRow">
                    {post.tags.map((t, i) => (
                      <span className="tag" key={i}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="readMoreRow">
                    <span className="readMore">Read Article →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogList;
