import { useEffect, useState } from "react";
import NavLink from "./NavLink";
import { useTheme } from "../ThemeContext";

function Navbar() {
    const { theme, toggleTheme } = useTheme();

    const [activeHref, setActiveHref] = useState<string>('#about');
    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    const navLinks: string[] = [
        "about"
        // "projects",
        // "skills",
        // "experience",
        // "contact"
    ];

    useEffect(() => {
        const handleScroll = (): void => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar navbar-expand-lg sticky-top py-3 bg-body ${isScrolled ? "border-bottom border-cream" : ""}`} style={{ marginBottom: '75px' }}>
            <div className="container hstack justify-content-between">
                <div className="hstack gap-3">
                    <div className="ratio ratio-1x1" style={{ width: '25px' }}>
                        <div className="bg-primary text-white hstack justify-content-center rounded-1 fw-medium" style={{ fontSize: '12px' }}>
                            E
                        </div>
                    </div>
                    <span className="font-monospace fw-medium">ericzamora</span>
                    <span className="font-monospace text-body-tertiary fw-medium">.dev</span>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mobileNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse flex-grow-0 py-3 py-lg-0" id="mobileNavbar">
                    <ul className="navbar-nav gap-2">
                        {
                            navLinks.map(link => {
                                return <NavLink href={`#${link}`} isActive={activeHref == `#${link}`} onClick={() => setActiveHref(`#${link}`)}>{link}</NavLink>
                            })
                        }
                    </ul>
                    <div className="d-block d-lg-none">
                        <div className="hstack gap-2 justify-content-end">
                            <i className={`bi ${theme === 'light' ? "bi-brightness-high-fill text-warning" : "bi-moon-fill text-warning"}`}></i>
                            <div className="form-check form-check-reverse form-switch">
                                <input className="form-check-input" checked={theme === 'light' ? false : true} type="checkbox" role="switch" id="themeToggler" onClick={toggleTheme} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="collapse navbar-collapse flex-grow-0 hstack gap-3">
                    <div className="hstack gap-3">
                        <i className={`bi ${theme === 'light' ? "bi-brightness-high-fill text-warning" : "bi-moon-fill text-warning"}`}></i>
                        <div className="form-check form-check-reverse form-switch">
                            <input className="form-check-input" checked={theme === 'light' ? false : true} type="checkbox" role="switch" id="themeToggler" onClick={toggleTheme} />
                        </div>
                    </div>
                    <a className="btn btn-outline-primary px-3 py-1 font-monospace" href="Eric Zamora_Fullstack Software Engineer_Resume.pdf" download>
                        <span className="small">Resume</span>
                        <i className="bi bi-download ms-2" style={{ fontSize: '15px' }}></i>
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;