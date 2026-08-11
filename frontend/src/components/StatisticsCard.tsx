interface StatisticsCardProps {
    title: string,
    statistic: string,
    subtitle: string
}

function StatisticsCard({ title, statistic, subtitle }: StatisticsCardProps) {
    return (
        <div className="card bg-body-secondary overflow-hidden">
            <div className="card-body">
                <span className="font-monospace text-body-tertiary small">{title}</span>
                <div className="fw-bold fs-4 my-1 text-primary">{statistic}</div>
                <p className="m-0 small text-body-secondary">
                    <small>{subtitle}</small>
                </p>
            </div>
        </div>
    );
}

export default StatisticsCard;