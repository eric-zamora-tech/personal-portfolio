import type { ReactNode } from "react";

interface ButtonProps {
    className?: string,
    href?: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    children?: ReactNode
}

function Button({ className, href, onClick, children }: ButtonProps) {
    const hrefPassed = href !== undefined;
    const onClickPassed = onClick !== undefined;

    return (
        <>
            {
                hrefPassed && !onClickPassed &&
                <a className={`btn ${className} px-3 py-1 font-monospace`} href={href} download target="_blank">
                    {children}
                </a>
            }

            {
                onClickPassed && !hrefPassed &&
                <button className={`btn ${className} px-3 py-1 font-monospace`} onClick={onClick}>
                    {children}
                </button>
            }
        </>
    );
}

export default Button;