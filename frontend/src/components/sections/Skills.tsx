import SkillCard from "../SkillCard";
import Skill from "../Skill";

function Skills() {
    return (
        <>
            <div className="row row-cols-1 row-cols-lg-3 g-0">
                <div className="col">
                    <SkillCard title="Languages" subtitle="Languages I use to build and solve problems.">
                        <Skill name="C#" proficiency={90} />
                        <Skill name="JavaScript" proficiency={80} />
                        <Skill name="TypeScript" proficiency={60} />
                        <Skill name="SQL" proficiency={75} />
                        <Skill name="Python" proficiency={65} />
                        <Skill name="Java" proficiency={50} />
                    </SkillCard>
                </div>
                <div className="col">
                    <SkillCard title="Frontend" subtitle="Tools I use to build the user interface.">
                        <Skill name="React" proficiency={65} />
                        <Skill name="Blazor" proficiency={95} />
                        <Skill name="Bootstrap" proficiency={75} />
                        <Skill name="Vite" proficiency={55} />
                        <Skill name="HTML" proficiency={95} />
                        <Skill name="CSS" proficiency={85} />
                    </SkillCard>
                </div>
                <div className="col">
                    <SkillCard title="Backend" subtitle="Building APIs and the logic behind applications.">
                        <Skill name=".NET Core" proficiency={85} />
                        <Skill name=".NET MVC" proficiency={75} />
                        <Skill name="Node.js" proficiency={65} />
                        <Skill name="Express.js" proficiency={55} />
                        <Skill name="REST APIs" proficiency={80} />
                        <Skill name="SignalR" proficiency={70} />
                    </SkillCard>
                </div>
                <div className="col">
                    <SkillCard title="Data & Storage" subtitle="Working with databases and application data.">
                        <Skill name="SQL Server" proficiency={85} />
                        <Skill name="Entity Framework Core" proficiency={95} />
                        <Skill name="MongoDB" proficiency={55} />
                        <Skill name="PostgreSQL" proficiency={60} />
                        <Skill name="Prisma" proficiency={50} />
                    </SkillCard>
                </div>
                <div className="col">
                    <SkillCard title="Cloud & Infrastructure" subtitle="Hosting, deploying, and managing applications.">
                        <Skill name="IIS" proficiency={80} />
                        <Skill name="Azure" proficiency={50} />
                        <Skill name="Docker" proficiency={55} />
                        <Skill name="Azure Key Vault" proficiency={60} />
                        <Skill name="GitHub Actions" proficiency={70} />
                    </SkillCard>
                </div>
                <div className="col">
                    <SkillCard title="DevOps & Tools" subtitle="Tools I use to build and ship software.">
                        <Skill name="Git" proficiency={95} />
                        <Skill name="Visual Studio" proficiency={90} />
                        <Skill name="Postman" proficiency={75} />
                        <Skill name="GitHub" proficiency={85} />
                        <Skill name="CI/CD" proficiency={70} />
                    </SkillCard>
                </div>
            </div>
        </>
    );
}

export default Skills;