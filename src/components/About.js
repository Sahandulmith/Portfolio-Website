import React, { useState } from "react";
import colorSharp from "../assets/img/color-sharp.png";
import aboutimage from "../assets/img/IMG-20240809-WA0102~2.jpg";

export const About = () => {
  const [isExpanded, setIsExpanded] = useState(false); // State to track if description is expanded

  const toggleDescription = () => {
    setIsExpanded(!isExpanded); // Toggle the expanded state
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "src/assets/cv/mycv1.pdf";  // Path to the PDF file in the public directory
    link.download = "SahanDulmith_CV.pdf"; // Name of the file when downloaded
    link.click();
  };

  return (
    <section className="about" id="abouts">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="about-bx wow zoomIn">
            <div className="about-content">
              <img src={aboutimage} alt="mypicture" />
              <div className="about-text">
                <h2>About Me</h2>
                <p>
                  I am a highly skilled and versatile software developer who excels
                  in both backend and frontend development, creating well-rounded
                  and efficient applications. With proficiency across various
                  programming languages, frameworks, and tools, I am able to deliver
                  end-to-end solutions that meet user needs and enhance functionality.
                  {isExpanded && (
                    <>
                      <br />
                      Backend Development:
                      I have worked with a variety of backend technologies, including
                      Java, Python, and SQL. My expertise in Java allows me to develop
                      robust enterprise-level applications, such as those that manage
                      user data, transactions, and integrate with external hardware,
                      like GSM modems for SMS communication. I have also worked on image
                      recognition projects in Python, including face recognition systems
                      for automated attendance tracking. My strong knowledge of SQL
                      ensures secure and efficient data storage and querying, which is
                      crucial for managing transactions, reports, and user data in
                      applications.
                      <br />
                      Frontend Development:
                      On the frontend, I excel at building intuitive, user-friendly
                      interfaces using modern frameworks like Flutter, React, and
                      Next.js. I am proficient in HTML, CSS, and JavaScript, and make
                      use of Tailwind CSS for utility-first styling. My experience with
                      React enables me to create dynamic, interactive user experiences,
                      while Next.js allows me to implement server-side rendering and
                      static site generation for optimal performance. I also have
                      expertise in Redux for state management and Socket.IO for
                      implementing real-time communication features. Additionally, I have
                      experience with Java Swing for developing desktop applications,
                      ensuring my versatility across both web and desktop platforms.
                    </>
                  )}
                </p>
                <div className="buttons-container">
                  <button onClick={toggleDescription}>
                    {isExpanded ? "See Less" : "See More"}
                  </button>
                  <button onClick={handleDownload}>Download CV</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img className="background-image-left" src={colorSharp} alt="Image" />
  </section>
);
};