import { useEffect, useState } from "react";
import NavLink from "../NavLink";
import Button from "../Button";
import ThemeToggler from "../ThemeToggler";

function Navbar() {
    const [activeHref, setActiveHref] = useState<string>('#about');
    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    const navLinks: string[] = [
        "about",
        // "projects",
        "skills",
        "experience"
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
                {/* ===== LOGO & NAME ===== */}
                <div className="hstack gap-3">
                    <div className="ratio ratio-1x1" style={{ width: '25px' }}>
                        <div className="bg-primary text-white hstack justify-content-center rounded-1 fw-medium" style={{ fontSize: '12px' }}>
                            E
                        </div>
                    </div>
                    <span className="font-monospace fw-medium">ericzamora</span>
                    <span className="font-monospace text-body-tertiary fw-medium">.dev</span>
                </div>
                {/* ===== MOBILE NAV TOGGLER ===== */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mobileNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse flex-grow-0 py-3 py-lg-0" id="mobileNavbar">
                    {/* ===== MOBILE NAV LINKS ===== */}
                    <ul className="navbar-nav gap-2">
                        {
                            navLinks.map(link => {
                                return <NavLink key={link} href={`#${link}`} isActive={activeHref == `#${link}`} onClick={() => setActiveHref(`#${link}`)}>{link}</NavLink>
                            })
                        }
                    </ul>
                    {/* ===== MOBILE THEME TOGGLER ===== */}
                    <div className="d-block d-lg-none mt-4">
                        <ThemeToggler />
                    </div>
                </div>
                <div className="collapse navbar-collapse flex-grow-0 hstack gap-3">
                    {/* ===== THEME TOGGLER ===== */}
                    <ThemeToggler />

                    {/* ===== DOWNLOAD RESUME ===== */}
                    <Button className="btn-outline-primary" href="Eric Zamora_Fullstack Software Engineer_Resume.pdf">
                        <span className="small">Resume</span>
                        <i className="bi bi-download ms-2" style={{ fontSize: '15px' }}></i>
                    </Button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;