function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <div className="border-top bg-body-tertiary py-4 mt-5">
            <div className="container d-flex gap-3 flex-column flex-lg-row align-items-center justify-content-between">
                <div className="font-monospace text-body-secondary small text-center">
                    <span>© {currentYear} Eric Zamora · built with React, TypeScript & Bootstrap</span>
                </div>
                <div>
                    <a className="btn btn-link font-monospace p-0" href="mailto:eric.zamora.in@gmail.com">eric.zamorea.in@gmail.com</a>
                </div>
            </div>
        </div>
    );
}

export default Footer;