import React from "react";
import { Badge, Button, Image } from "react-bootstrap";

function PItem({ project }) {
  return (
    <div className="d-flex flex-row" style={{ width: "100%" }}>
      <div className="d-flex flex-column" style={{ width: "60%" }}>
        <h3>{project.title}</h3>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
          }}
        >
          {project.tech?.map((skill) => (
            <Badge bg="dark" className="px-2 py-2 text-lg">
              <span style={{ fontSize: 16 }}>{skill}</span>
            </Badge>
          ))}
        </div>
        <p style={{ fontSize: 20, marginTop: 20 }}>{project?.desc}</p>
        <a href={project?.link} target="_blank" rel="noreferrer">
          <Button
            variant="primary"
            style={{
              backgroundColor: "#f56106",
              border: "none",
              padding: "8px 12px",
              width: "80%",
              marginTop: 40,
            }}
          >
            View Project
          </Button>
        </a>
      </div>
      <Image
        width={400}
        src={project.img}
        rounded
        style={{ objectFit: "cover" }}
      ></Image>
    </div>
  );
}

export default PItem;
