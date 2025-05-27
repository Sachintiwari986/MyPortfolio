function Experience() {
    const experiences = [
        {
            title: "Full Stack Developer",
            company: "AMD Software and Services",
            duration: "Feb 2023 – Feb 2024",
            description: [
                "Developed features for COPOMIS using .NET Core and jQuery.",
                "Designed and implemented MySQL databases.",
                "Led junior developers and structured project flow."
            ]
        },
        {
            title: "Full Stack Developer",
            company: "Social IT World",
            duration: "Dec 2021 – Sep 2022",
            description: [
                "Built taxi ride application with .NET Core and React JS.",
                "Created RESTful APIs for mobile app integration.",
                "Designed and managed MSSQL Server database schemas."
            ]
        },
        {
            title: "Junior Software Developer",
            company: "Sarvanam Software",
            duration: "Apr 2021 – Dec 2021",
            description: [
                "Developed School Management System modules using ASP.NET and jQuery.",
                "Created REST APIs for student and attendance modules.",
                "Wrote optimized stored procedures in MSSQL Server."
            ]
        }
    ];

    return (
        <section className="my-5">
            <div className="container">
                <h2 className="text-warning mb-4">Experience</h2>
                {experiences.map((exp, index) => (
                    <div className="card mb-4" key={index}>
                        <div className="card-body">
                            <h5 className="card-title">{exp.title} - {exp.company}</h5>
                            <h6 className="card-subtitle text-muted">{exp.duration}</h6>
                            <ul className="mt-2">
                                {exp.description.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Experience;
