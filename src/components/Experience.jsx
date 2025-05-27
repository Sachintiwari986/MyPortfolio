const experienceData = [
    {
        title: "Full Stack Developer",
        company: "AMD Software and Services",
        duration: "Feb 2023 – Feb 2024",
        description: [
            "Built features for COPOMIS using .NET Core and jQuery.",
            "Led database design using MSSQL and MySQL.",
            "Guided junior developers."
        ]
    },
    {
        title: "Full Stack Developer",
        company: "Social IT World",
        duration: "Dec 2021 – Sep 2022",
        description: [
            "Developed taxi ride app with React and .NET Core.",
            "Built REST API and SQL stored procedures."
        ]
    },
    {
        title: "Junior Software Developer",
        company: "Sarvanam Software",
        duration: "Apr 2021 – Dec 2021",
        description: [
            "Developed School Management System modules using ASP.NET.",
            "Built REST API and SQL queries."
        ]
    }
];

function Experience() {
    return (
        <section>
            <h2>Professional Experience</h2>
            {experienceData.map((exp, index) => (
                <div key={index}>
                    <h3>{exp.title} – {exp.company}</h3>
                    <p>{exp.duration}</p>
                    <ul>
                        {exp.description.map((line, idx) => <li key={idx}>{line}</li>)}
                    </ul>
                </div>
            ))}
        </section>
    );
}
export default Experience;
