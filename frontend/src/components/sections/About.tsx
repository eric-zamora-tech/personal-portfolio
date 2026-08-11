import { getTotalYearsExperience } from "../../services/ExperienceService";
import Button from "../Button";
import ProfileCard from "../ProfileCard";
import StatisticsCard from "../StatisticsCard";

function About() {
    return (
        <section className="container" style={{ paddingBottom: '100px' }} id="about">
            <div className="row row-gap-4" style={{ marginBottom: '75px' }}>
                <div className="col-lg-7">
                    {/* ===== ROLE ===== */}
                    <h6 className="fw-light text-body-secondary font-monospace mb-3" style={{ letterSpacing: '2px' }}>Full Stack Software Engineer</h6>
                    {/* ===== NAME ===== */}
                    <h1 className="fw-bold mb-4" style={{ fontSize: '75px' }}>
                        Eric Zamora
                        <span className="ratio ratio-1x1 bg-primary rounded-circle d-inline-block ms-1" style={{ width: '14px' }}></span>
                    </h1>
                    {/* ===== CAPTION ===== */}
                    <p className="fs-5 mb-5">I build full-stack applications using C#, ASP.NET Core, React, SQL Server, and Azure. I enjoy creating software that's maintainable, scalable, and solves real business problems.</p>
                    {/* ===== SOCIAL LINKS ===== */}
                    <div className="hstack flex-wrap gap-3 mb-5">
                        <Button className="btn-outline-primary" href="https://github.com/eric-zamora-tech">
                            <i className="bi bi-github me-2" style={{ fontSize: '15px' }}></i>
                            <span className="small">GitHub</span>
                        </Button>
                        <Button className="btn-outline-primary" href="https://www.linkedin.com/in/eric-zamora-tech/">
                            <i className="bi bi-linkedin me-2" style={{ fontSize: '15px' }}></i>
                            <span className="small">LinkedIn</span>
                        </Button>
                        <Button className="btn-outline-primary" href="mailto:eric.zamora.in@gmail.com">
                            <i className="bi bi-envelope me-2" style={{ fontSize: '15px' }}></i>
                            <span className="small">Email</span>
                        </Button>
                        <Button className="btn-outline-primary" href="Eric Zamora_Fullstack Software Engineer_Resume.pdf">
                            <i className="bi bi-file-earmark-text me-2" style={{ fontSize: '15px' }}></i>
                            <span className="small">Resume</span>
                        </Button>
                    </div>
                    {/* ===== SATISTICS ===== */}
                    <div className="card-group">
                        <StatisticsCard title="YEARS EXPERIENCE" statistic={`${getTotalYearsExperience()}+`} subtitle="Building full-stack solutions" />
                        <StatisticsCard title="APPLICATIONS BUILT" statistic="12+" subtitle="Production & personal projects" />
                        <StatisticsCard title="USERS SUPPORTED" statistic="5000+" subtitle="Internal & public applications" />
                    </div>
                </div>
                <div className="col-auto mx-auto mx-lg-0 ms-lg-auto ">
                    {/* ===== PROFILE PICTURE ===== */}
                    <ProfileCard />
                </div>
            </div>

            {/* ===== READ.ME ===== */}
            <div className="card rounded-4 overflow-hidden">
                <div className="card-header bg-body-tertiary">
                    <h3 className="mb-0 small text-body-tertiary font-monospace hstack gap-2">
                        <div className="ratio ratio-1x1" style={{ width: '8px' }}>
                            <div className="bg-dark bg-opacity-25 rounded-circle"></div>
                        </div>
                        README.md
                    </h3>
                </div>
                <div className="card-body bg-body-secondary">
                    <div className="row py-3">
                        <div className="col-lg-4">
                            <div className="mx-0 mx-lg-4 mb-3 mb-lg-0 text-primary font-monospace"># about</div>
                        </div>
                        <div className="col lh-lg">
                            <p className="text-body-secondary">Good software is more than just code — it's about building solutions that are <span className="fw-semibold text-primary">intuitive, maintainable, and reliable</span>. I enjoy creating applications that solve real problems while keeping both the user experience and long-term maintainability in mind.</p>
                            <p className="text-body-secondary">My experience spans the full stack, working with <span className="fw-semibold text-primary">ASP.NET Core, React, Java, Python, SQL Server, Azure, and CI/CD pipelines</span>. Whether I'm designing APIs, building user interfaces, or working with databases, I enjoy finding simple, effective solutions to complex problems.</p>
                            <p className="mb-0 text-body-secondary">I like understanding how every layer of an application fits together because the best software isn't built one piece at a time — it's built by <span className="fw-semibold text-primary">seeing the bigger picture</span>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;