import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Projects/avatar.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={({ fontSize: "2.6em" }, { color: "indigo" })}>
              LET ME <span className="purple"> INTRODUCE</span> MYSELF
            </h1>
            <p className="home-about-body" style={{ color: "indigo" }}>
              I'm{" "}
              <i>
                <b className="purple">Passionate Programmer</b>
              </i>{" "}
              and an{" "}
              <i>
                <b className="purple">Enthusiastic Developer</b>
              </i>{" "}
              with a keen interest in{" "}
              <i>
                <b className="purple"> Software Development</b>
              </i>{" "}
              and{" "}
              <i>
                <b className="purple"> Competitive Programming</b>
              </i>
              . My love towards web developement made me to build and apply{" "}
              <b className="purple"> Algorithms</b> to solve{" "}
              <i>
                <b className="purple"> Real-world problems</b>
              </i>
              .
              <br />
              <br />
              As a professional, I am passionated and excited by{" "}
              <i>
                <b className="purple">Innovation</b>
              </i>
              . As an engineer, I am
              <i>
                <b className="purple"> Detail-Oriented, Analytical Person</b>
              </i>{" "}
              <i>
                <b className="purple">and also a Good Problem Solver</b>
              </i>{" "}
              . I really love to collaborate with other developers on
              <i>
                <b className="purple"> Interesting Projects</b>
              </i>
              .
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> HTML, CSS, Javascript, Java </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  Deep Learning and Natural Launguage Processing.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with{" "}
              <i>
                <b className="purple">Node.js</b>
              </i>{" "}
              and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js, Redux and MongoDB</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1 style={{ color: "indigo" }}>FIND ME ON</h1>
            <p style={{ color: "indigo" }}>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/kalpana123-1"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/KTamatam"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/kalpana-tamatam-1234-k/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
