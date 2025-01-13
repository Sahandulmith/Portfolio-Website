import htmlIcon from "../assets/icons/html-5.png";
import cssIcon from "../assets/icons/css-3.png";
import jsIcon from "../assets/icons/java-script.png";
import javaIcon from "../assets/icons/java.png";
import reactIcon from "../assets/icons/atom.png";
import nodeIcon from "../assets/icons/nodejs.png";
import firebaseIcon from "../assets/icons/cloud-server.png";
import csharpIcon from "../assets/icons/c-sharp.png";
import sqlIcon from "../assets/icons/mysql.png";
import pythonIcon from "../assets/icons/python.png";
import sqlserIcon from "../assets/icons/sql-server.png";
import dockerIcon from "../assets/icons/social.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const skills = [
    { icon: reactIcon, label: "React.js" },
    { icon: nodeIcon, label: "Node.js" },
    { icon: firebaseIcon, label: "Firebase" },
    { icon: htmlIcon, label: "HTML" },
    { icon: cssIcon, label: "CSS" },
    { icon: javaIcon, label: "Java" },
    { icon: jsIcon, label: "JavaScript" },
    { icon: sqlserIcon, label: "SQLServer" },
    { icon: dockerIcon, label: "Docker" },
    { icon: pythonIcon, label: "Python" },
    { icon: csharpIcon, label: "C#" },
    { icon: sqlIcon, label: "MySQL" },
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Here are the technologies I work with:
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                {skills.map((skill, index) => (
                  <div className="item" key={index}>
                    <img src={skill.icon} alt={skill.label} />
                    <h5>{skill.label}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
