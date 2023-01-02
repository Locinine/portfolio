import React from "react";
import { Col } from "react-bootstrap";

import {
  interests,
  contact_info,
  education,
  skills,
  contracts,
  screenSizes,
} from "../../constants";

import "./styles/contact.scss";

const educationSection = education.map(({ dates, org_name, details }) => (
  <div>
    <h5 className="mb-0">{org_name}</h5>
    <p>{dates}</p>
    {details.map((qualification) => (
      <p>{qualification}</p>
    ))}
  </div>
));

const contractSection = contracts.map(({ dates, org_name, details }) => (
  <div>
    <h5 className="mb-0">{org_name}</h5>
    <p>{dates}</p>
    <p>{details}</p>
  </div>
));

const Content = (
  <>
    <h3>Contact Info</h3>
    {Object.entries(contact_info).map(([key, val]) => (
      <p>
        <span className="bold">{`${key}:`}</span> <br />
        {val}
      </p>
    ))}
    <h3>Skills</h3>
    <p>
      {skills.map((skill) => (
        <>
          {skill}
          <br />
        </>
      ))}
    </p>
    <h3>Contract Work</h3>
    {contractSection}
    <h3>Education</h3>
    {educationSection}
    <h3>Interests</h3>
    <p>{interests}</p>
  </>
);

interface ContactProps {
  windowWidth: Number;
  isMobile: Boolean;
}

export const Contact: React.FC<ContactProps> = ({ windowWidth, isMobile }) => {
  if (windowWidth > screenSizes.medium && !isMobile) {
    return (
      <Col md={3} sm={3} className="sidebar_container">
        {Content}
      </Col>
    );
  }

  return Content;
};

export default Contact;
