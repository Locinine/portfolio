import React, { useRef } from "react";
import { Col, Row, Button } from "react-bootstrap";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { HiOutlineDownload } from "react-icons/hi";

import Contact from "./contact";
import { summary, experience, screenSizes } from "../../constants";

import "./styles/cv.scss";

interface CVProps {
  windowWidth: Number;
  isMobile: Boolean;
}
const CV: React.FC<CVProps> = ({ windowWidth, isMobile }) => {
  const cvRef = useRef<HTMLDivElement>(null);

  const exportPDF = () => {
    if (cvRef.current) {
      const temp = cvRef.current;
      temp.removeAttribute("class");
      html2canvas(cvRef.current).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const imgWidth = 210;
        const pageHeight = 297;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let heightLeft = imgHeight;

        const pdf = new jsPDF("p", "mm");
        let position = 0;

        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }
        pdf.save("FarrahCV.pdf");
      });
    }
  };

  const Content = (
    <>
      <Button
        className="download bs-1"
        variant="secondary"
        size="sm"
        onClick={exportPDF}
        data-html2canvas-ignore
      >
        <HiOutlineDownload />
      </Button>
      <Col md={9} className="pt-20">
        <h3>Summary</h3>
        <p>{summary}</p>
        <h3>Experience</h3>
        {experience.map(({ dates, role, company_name, desc, tech }, i) => (
          <div className={i !== 0 && role ? "bt" : ""}>
            <h4>{role}</h4>
            <h5>{company_name}</h5>
            <p>{dates}</p>
            <p>
              Key Technologies: <br /> {tech}
            </p>
            <p>{desc}</p>
          </div>
        ))}
      </Col>
      <Contact windowWidth={windowWidth} isMobile={isMobile} />
    </>
  );

  return (
    <div className="cv_container bs-1" ref={cvRef}>
      {windowWidth > screenSizes.small || !isMobile ? (
        <Row>{Content}</Row>
      ) : (
        Content
      )}
    </div>
  );
};

export default CV;
