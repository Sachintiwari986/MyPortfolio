function Skills({ style }) {
  const skills = [
    "ASP.NET",
    "React JS",
    "JavaScript",
    "jQuery",
    "HTML",
    "CSS",
    "MSSQL Server",
    "MySQL",
  ];

  return (
    <section className='my-5'>
      <div className='container'>
        <h2 className='text-success mb-3' style={style}>
          Skills
        </h2>
        <div className='row'>
          {skills.map((skill, index) => (
            <div key={index} className='col-md-3 col-6 mb-2'>
              <div className='border rounded p-2 text-center '>{skill}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Skills;
