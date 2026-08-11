interface TitledSectionProps {
    id: string,
    title?: string
    subtitle?: string
    description?: string,
    children?: React.ReactNode
}

function TitledSection({ id, title, subtitle, description, children }: TitledSectionProps) {
    return (
        <>
            <hr className="mb-6" />
            <section id={id} className="container mb-6">
                <div className="row" style={{ marginBottom: '40px' }}>
                    <div className="col-12">
                        {subtitle && <div className="font-monospace text-primary small mb-3">{subtitle}</div>}
                        {title && <h2 className="fw-bold">{title}</h2>}
                        {description && <div className="small text-body-secondary">{description}</div>}
                    </div>
                </div>
                <hr className="mb-5" />
                {children}
            </section>
        </>
    );
}

export default TitledSection