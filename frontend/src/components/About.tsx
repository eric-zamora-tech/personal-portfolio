function About() {
    const firstExperienceDate: Date = new Date(2023, 0, 1);

    function calculateTotalYearsExperience() {
        const currentDate: Date = new Date();

        let yearsDifference: number = currentDate.getFullYear() - firstExperienceDate.getFullYear();
        const monthDifference: number = currentDate.getMonth() - firstExperienceDate.getMonth();
        const dayDifference: number = currentDate.getDate() - firstExperienceDate.getDate();

        if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
            yearsDifference--;
        }

        return yearsDifference;
    }

    return (
        <div className="container">
            <div className="row row-gap-4">
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
                        <a className="btn btn-outline-primary px-3 font-monospace flex-grow-1 flex-lg-grow-0" href="https://github.com/eric-zamora-tech" target="_blank">
                            <i className="bi bi-github me-2" style={{ fontSize: '15px' }}></i>
                            <span className="small">GitHub</span>
                        </a>
                        <a className="btn btn-outline-primary px-3 font-monospace flex-grow-1 flex-lg-grow-0" href="https://www.linkedin.com/in/eric-zamora-tech/" target="_blank">
                            <i className="bi bi-linkedin me-2" style={{ fontSize: '15px' }}></i>
                            <span className="small">LinkedIn</span>
                        </a>
                        <a className="btn btn-outline-primary px-3 font-monospace flex-grow-1 flex-lg-grow-0" href="mailto:eric.zamora.in@gmail.com">
                            <i className="bi bi-envelope me-2" style={{ fontSize: '15px' }}></i>
                            <span className="small">Email</span>
                        </a>
                        <a className="btn btn-outline-primary px-3 font-monospace flex-grow-1 flex-lg-grow-0" href="Eric Zamora_Fullstack Software Engineer_Resume.pdf" download>
                            <i className="bi bi-file-earmark-text me-2" style={{ fontSize: '15px' }}></i>
                            <span className="small">Resume</span>
                        </a>
                    </div>
                    {/* ===== SATISTICS ===== */}
                    <div className="card-group">
                        <div className="card bg-body-secondary overflow-hidden">
                            <div className="card-body">
                                <span className="font-monospace text-body-tertiary small">YEARS EXPERIENCE</span>
                                <div className="fw-bold fs-4 my-1">{calculateTotalYearsExperience()}+</div>
                                <p className="m-0 small text-body-secondary">
                                    <small>Backend, platform, a little frontend</small>
                                </p>
                            </div>
                        </div>
                        <div className="card bg-body-secondary overflow-hidden">
                            <div className="card-body">
                                <span className="font-monospace text-body-tertiary small">APPLICATIONS BUILT</span>
                                <div className="fw-bold fs-4 my-1">10+</div>
                                <p className="m-0 small text-body-secondary">
                                    <small>Still running, still paged for</small>
                                </p>
                            </div>
                        </div>
                        <div className="card bg-body-secondary overflow-hidden">
                            <div className="card-body">
                                <span className="font-monospace text-body-tertiary small">USERS SUPPORTED</span>
                                <div className="fw-bold fs-4 my-1">5000+</div>
                                <p className="m-0 small text-body-secondary">
                                    <small>The number I design against</small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-auto mx-auto ms-lg-auto ">
                    {/* ===== PROFILE PICTURE ===== */}
                    <div className="card rounded-4 overflow-hidden">
                        <div className="card-img-top d-flex justify-content-center" style={{ maxWidth: '320px', height: '390px' }}>
                            <img className="h-100" src="profile-picture.jpg" />
                        </div>
                        <div className="card-body p-0">
                            <div className="border-bottom bg-body-secondary px-3 hstack justify-content-between" style={{ paddingTop: '10px', paddingBottom: '10px' }}>
                                <span className="font-monospace text-body-tertiary small">location</span>
                                <span className="font-monospace small">McAllen, Texas</span>
                            </div>
                            <div className="border-bottom bg-body-secondary px-3 hstack justify-content-between" style={{ paddingTop: '10px', paddingBottom: '10px' }}>
                                <span className="font-monospace text-body-tertiary small">timezone</span>
                                <span className="font-monospace small">Chicago</span>
                            </div>
                            <div className="bg-body-secondary px-3 hstack justify-content-between" style={{ paddingTop: '10px', paddingBottom: '10px' }}>
                                <span className="font-monospace text-body-tertiary small">status</span>
                                <span className="font-monospace small">Open to work</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;