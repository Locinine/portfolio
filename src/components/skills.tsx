import React from "react";
import { Col, Row } from "react-bootstrap";

import "../components/styles/skills.scss";

const skillData = [
  {
    name: "React JS",
    proficiency: 12,
  },
  {
    name: "SCSS",
    proficiency: 12,
  },
  {
    name: "Redux",
    proficiency: 10,
  },
  {
    name: "Angular Material JS",
    proficiency: 8,
  },
  {
    name: "Go",
    proficiency: 5,
  },
  {
    name: "SharePoint 2010/2013",
    proficiency: 7,
  },
  {
    name: "Kubernetes",
    proficiency: 4,
  },
];

const Skills = () => (
  <Row>
    <Col>
      {skillData.map(({ proficiency, name }) => (
        <Row className="skill">
          <Col className="skill_pro" md={proficiency}>
            {name}
          </Col>
          <Col className="skill_deficit"></Col>
        </Row>
      ))}
    </Col>
  </Row>
);

export default Skills;
