import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import BlogsImg from "./BlogsImg";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { greeting, contactPageData } from "../../portfolio.js";
import { style } from "glamor";

const ContactData = contactPageData.contactSection;
const blogSection = contactPageData.blogSection;

function Contact(props) {
  const theme = props.theme;

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  return (
    <div className="contact-main">
      <Header theme={theme} setTheme={props.setTheme} />
      <div className="basic-contact">
        <Fade bottom duration={1000} distance="40px">
          <div className="contact-heading-div">
            <div className="contact-heading-img-div">
              <img
                className="profile-pic"
                src={require(`../../assests/images/${ContactData["profile_image_path"]}`)}
                alt=""
              />
            </div>
            <div className="contact-heading-text-div">
              <h1
                className="contact-heading-text"
                style={{ color: theme.text }}
              >
                {ContactData["title"]}
              </h1>
              <p
                className="contact-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {ContactData["description"]}
              </p>
              <SocialMedia />
              <br />
              <br />
              <a {...styles} className="general-btn" href={greeting.resumeLink}>
                See my Resume
              </a>
            </div>
          </div>
        </Fade>
        <Fade bottom duration={1000} distance="40px">
          <div className="blog-heading-div">
            <div className="blog-heading-text-div">
              <h1 className="blog-heading-text" style={{ color: theme.text }}>
                {blogSection["title"]}
              </h1>
              <p
                className="blog-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {blogSection["subtitle"]}
              </p>
              <div className="blog-list-div" style={{ marginTop: "20px", marginBottom: "30px", textAlign: "left" }}>
                {blogSection.blogs &&
                  blogSection.blogs.map((blog, i) => (
                    <div key={i} style={{ marginBottom: "20px" }}>
                      <a
                        href={blog.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: theme.text,
                          fontWeight: "bold",
                          fontSize: "1.2rem",
                          textDecoration: "none",
                          borderBottom: `2px solid ${theme.accentColor}`,
                        }}
                        onMouseEnter={(e) => (e.target.style.color = theme.accentColor)}
                        onMouseLeave={(e) => (e.target.style.color = theme.text)}
                      >
                        {blog.title}
                      </a>
                      <p
                        style={{
                          color: theme.secondaryText,
                          marginTop: "5px",
                          fontSize: "1rem",
                        }}
                      >
                        {blog.description}
                      </p>
                    </div>
                  ))}
              </div>
              <div className="blogsite-btn-div">
                <a {...styles} className="general-btn" href={blogSection.link}>
                  My LinkedIn Profile
                </a>
              </div>
            </div>
            <div className="blog-heading-img-div">
              <BlogsImg theme={theme} />
            </div>
          </div>
        </Fade>
      </div>
      <Footer theme={props.theme} onToggle={props.onToggle} />
    </div>
  );
}

export default Contact;
