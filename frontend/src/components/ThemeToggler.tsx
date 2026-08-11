import { useId } from "react";
import { useTheme } from "../ThemeContext";

function ThemeToggler() {
    const id = useId();
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="hstack gap-3">
            <i className={`bi ${theme === 'light' ? "bi-brightness-high-fill text-warning" : "bi-moon-fill text-warning"}`}></i>
            <div className="form-check form-check-reverse form-switch">
                <input readOnly={true} className="form-check-input" checked={theme === 'light' ? false : true} type="checkbox" role="switch" id={id} onClick={toggleTheme} />
            </div>
        </div>
    );
}

export default ThemeToggler;