import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.webp'
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/2200030704Raghu" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </header>
           <div className="body">
  <h3>Certification Tracker</h3>
  <p>
    Developed a full-stack Certification Tracker using Spring Boot and React to manage and monitor employee skill certifications efficiently. Integrated MySQL for secure and scalable data storage.
  </p>
</div>
<footer>
  <ul className="tech-list">
    <li>Spring Boot</li>
    <li>React</li>
    <li>MySQL</li>
  </ul>
</footer>

          </div>
        </ScrollAnimation>



       

      </div>
    </Container>
  );
}