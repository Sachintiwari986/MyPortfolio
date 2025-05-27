import React from "react";

function Projects({ style }) {
  const projects = [
    {
      name: "School Management System (SchoolMan)",
      company: "Sarvanam Software",
      description:
        "A web platform for schools to manage student records, attendance, grades, schedules, and communication. Built with ASP.NET, jQuery, and MSSQL.",
      techStack: "ASP.NET, MSSQL, Bootstrap, jQuery",
    },
    {
      name: "Taxi Ride Application (Ecab Nepal)",
      company: "Social IT World",
      description:
        "An app to book, track, and manage taxi rides. Features include fare estimation and driver tracking. Built with .NET Core and React.",
      techStack: ".NET Core, React, REST API, MSSQL",
    },
    {
      name: "Learning Management System (LMS)",
      company: "AMD Software and Services",
      description:
        "An educational platform for creating and managing courses, enrollments, assignments, grading, and reports.",
      techStack: ".NET Core, MySQL, jQuery, Bootstrap",
    },
  ];

  return (
    <section className='my-5'>
      <div className='container'>
        <h2 className='text-primary mb-4' style={style}>
          Projects
        </h2>
        <div className='row'>
          {projects.map((project, index) => (
            <div className='col-md-4 mb-4' key={index}>
              <div className='card h-100 shadow-sm'>
                <div className='card-body'>
                  <h5 className='card-title'>{project.name}</h5>
                  <h6 className='card-subtitle mb-2 text-muted'>
                    {project.company}
                  </h6>
                  <p className='card-text'>{project.description}</p>
                </div>
                <div className='card-footer text-muted'>
                  <small>Tech Stack: {project.techStack}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
