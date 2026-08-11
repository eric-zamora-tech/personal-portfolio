interface SkillCardProps {
    title?: string,
    subtitle?: string,
    children?: React.ReactNode
}

function SkillCard({ title, subtitle, children }: SkillCardProps) {
    return (
        <div className="card card-body p-4 bg-body-secondary h-100">
            {title && <h5 className="font-monospace small fw-semibold mb-1">{title}</h5>}
            {subtitle &&
                <div className="small text-body-secondary mb-4">
                    <small>{subtitle}</small>
                </div>
            }
            <div className="vstack gap-3">
                {children}
            </div>
        </div>
    );
}

export default SkillCard;