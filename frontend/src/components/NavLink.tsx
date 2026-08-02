interface NavLinkProps {
    href: string;
    isActive?: boolean;
    onClick: () => void;
    children: React.ReactNode;
}

function NavLink({ href, isActive, onClick, children }: NavLinkProps) {
    return (
        <li className="nav-item">
            <a className={`nav-link ${isActive ? "active" : ""}`} href={href} onClick={() => { onClick(); }}>{children}</a>
        </li>
    );
}

export default NavLink;