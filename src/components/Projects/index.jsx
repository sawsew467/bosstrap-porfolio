import React from "react";
import { Container } from "react-bootstrap";
import PItem from "./PItem";
import { PROJECT_DATA } from "../../data/projects";

function Projects() {
  return (
    <>
      <Container fluid="xl" style={{ padding: "0 180px" }} id="projects">
        <h1
          style={{
            marginTop: 60,
            marginBottom: 20,
            textTransform: "uppercase",
            fontWeight: 700,
            color: "#f56106",
          }}
        >
          Project
        </h1>
        <div className="d-flex flex-column" style={{ width: "100%", gap: 80 }}>
          {PROJECT_DATA.map((project) => (
            <PItem project={project}></PItem>
          ))}
        </div>
      </Container>
    </>
  );
}

export default Projects;
