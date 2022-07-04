import { React } from "react";
import ProjectTemplate from "./project_template";

function MyAppProjects() {
  //const { loading, error, data } = useQuery(GET_PROJECTS);

  //if (error) return `Error ${error.message}`;
  return (
    <section id="projects">
      <div className="row">
        <h1 style={{ marginTop: "2rem" }} className="section__title">
          Web Apps
        </h1>
        <ProjectTemplate data={{}} loading={true} />
      </div>
    </section>
  );
}

export default MyAppProjects;
