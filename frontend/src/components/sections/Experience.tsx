import ExperienceCard, { type JobData } from "../ExperienceCard";

function Experience() {
    const jobData: JobData[] = [
        {
            title: "Web Engineer",
            startDate: new Date('2024-11-15'),
            location: "Edinburg, Texas",
            company: "DHR Health",
            summary: "Build and modernize full-stack applications serving 5,000+ users across .NET, Blazor, SQL Server, and CI/CD.",
            description: [
                "Design, develop, and maintain full-stack web applications and RESTful APIs using Blazor Server, ASP.NET Core, and SQL Server that support more than 5,000 internal and public users.",
                "Led the migration of multiple legacy ASP.NET WebForms applications to Blazor Server and ASP.NET Core, improving maintainability and reducing development time by 10%.",
                "Design and optimize SQL Server databases using Entity Framework Core and LINQ, improving query performance and supporting scalable application architecture.",
                "Integrate third-party APIs, implement authentication using JWT, OAuth, OpenID Connect, and SAML, and automate deployments through GitHub Actions CI/CD pipelines."
            ],
            tags: [
                "Blazor",
                "C#",
                "SQL Server",
                "REST APIs",
                "CI/CD"
            ]
        },
        {
            title: "Program Specialist, Web Development Focus",
            startDate: new Date('2023-01-15'),
            endDate: new Date('2024-07-02'),
            location: "Edinburg, Texas",
            company: "The University of Texas Rio Grande Valley",
            summary: "Modernized institutional websites and built data-driven applications improving accessibility, traffic, and inventory management.",
            description: [
                "Modernized the college's websites using HTML, CSS, and JavaScript, improving usability, accessibility, and overall user experience while contributing to a 12% increase in website traffic.",
                "Designed and developed a database-driven inventory management application using Microsoft Power Platform, streamlining inventory tracking and improving data retrieval efficiency by 28%.",
                "Improved website accessibility and performance by optimizing front-end code, troubleshooting issues, enhancing SEO, and implementing WCAG standards to create a more reliable user experience."
            ],
            tags: [
                "HTML",
                "CSS",
                "JavaScript",
                "Microsoft Power Platform",
                "WCAG"
            ]
        },
        {
            title: "Student Web Developer",
            startDate: new Date('2021-06-02'),
            endDate: new Date('2021-09-02'),
            location: "Edinburg, Texas",
            company: "The University of Texas Rio Grande Valley",
            summary: "Built responsive, accessible websites and delivered user-focused improvements through stakeholder collaboration and Agile development.",
            description: [
                "Built responsive websites using HTML, CSS, and JavaScript, improving user engagement through cross-browser compatibility and adaptive design.",
                "Worked with stakeholders to gather requirements and deliver software enhancements using Agile development practices.",
                "Improved website accessibility and performance by implementing WCAG 2.1 standards, earning recognition from the center director for exceptional contributions."
            ],
            tags: [
                "HTML",
                "CSS",
                "JavaScript",
                "Web Accessibility",
                "Responsive Design"
            ]
        }
    ];

    return (
        <div>
            {jobData.map(job => {
                return <ExperienceCard job={job} />
            })}
        </div>
    );
}

export default Experience;