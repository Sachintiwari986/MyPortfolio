function Skills() {
    const skills = [
        "ASP.NET", "DotNet Core", "React JS", "JavaScript",
        "jQuery", "HTML", "CSS", "MSSQL Server", "MySQL"
    ];

    return (
        <section>
            <h2>Technical Skills</h2>
            <ul>
                {skills.map((skill, idx) => <li key={idx}>{skill}</li>)}
            </ul>
        </section>
    );
}
export default Skills;
