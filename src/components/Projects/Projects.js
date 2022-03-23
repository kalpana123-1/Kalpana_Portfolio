import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/translator.png";
import editor from "../../Assets/Projects/search.png";
import dunzo from "../../Assets/Projects/dunzo.png";
import bitsOfCode from "../../Assets/Projects/mailchimp.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dunzo}
              isBlog={false}
              title="Clone of Dunzo app"
              description="Dunzo is an Indian company that delivers groceries and essentials, fruits and vegetables, meat, pet supplies, food, and medicines in major cities. It also has a separate service to pick up and deliver packages within the same city."
              link="https://github.com/Rounak1234567/Dunzo"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Mail Chimp Clone"
              description="Mailchimp is an all-in-one Marketing Platform for small businesses. We empower millions of customers around the world to start and grow their businesses with our smart marketing technology, award-winning support, and inspiring content."
              link="https://github.com/kirankumar-medikurthy/Mail_Chimp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Search Engine App"
              description="A simple Search app which is used to display the most popular videos from an Youtube API. As it was a single page application, it provides the videos according to the search functionality."
              link="https://github.com/kalpana123-1/Search-Engine-App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Translator App"
              description="Simple translation application by fetching a translating API. Where the user can translate into 16 different languages around the world. I also provided use speech to text as well as read this to make the website more useful."
              link="https://github.com/kalpana123-1/Translator-App"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
