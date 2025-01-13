import { Col } from "react-bootstrap";
import navIcon3 from '../assets/img/nav-icon3.svg'; // GitHub icon
import navIcon4 from '../assets/img/nav-icon4.svg'; // YouTube icon

export const ProjectCard = ({ title, description, imgUrl, githubUrl, youtubeUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="proj-links">
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="proj-icon">
                <img src={navIcon4} alt="GitHub" width={20} />
              </a>
            )}
            {youtubeUrl && (
              <a href={youtubeUrl} target="_blank" rel="noopener noreferrer" className="proj-icon">
                <img src={navIcon3} alt="YouTube" width={20} style={{ color: 'red' }} />
              </a>
            )}
          </div>
        </div>
      </div>
    </Col>
  );
};
