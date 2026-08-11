export interface JobData {
    startDate: Date,
    endDate?: Date | null,
    location: string,
    title: string,
    company: string,
    summary: string,
    description: string[],
    tags?: string[]
}

interface ExperienceCardProps {
    job: JobData
}

function ExperienceCard({ job }: ExperienceCardProps) {
    return (
        <div className="row experience">
            <div className="col-lg-3 mb-3 mb-lg-0">
                <div className="font-monospace text-primary small mb-1">{job.startDate.toLocaleString('default', { month: 'short' })} {job.startDate.getFullYear()} — {job.endDate ? `${job.endDate.toLocaleString('default', { month: 'short' })} ${job.endDate.getFullYear()}` : "Present"}</div>
                <div className="small text-body-tertiary font-monospace">
                    <small>{job.location}</small>
                </div>
            </div>
            <div className="col">
                <h5 className="fw-semibold mb-1">{job.title}</h5>
                <div className="small text-body-secondary mb-3">{job.company}</div>
                <p className="small">{job.summary}</p>
                <ul className="small text-body-secondary mb-0">
                    {job.description.map(line => {
                        return <li className="mt-2">{line}</li>
                    })}
                </ul>
                {job.tags &&
                    <div className="hstack gap-2 mt-4 flex-wrap">
                        {
                            job.tags.map(tag => {
                                return <span className="small border px-2 py-1 rounded bg-body-tertiary fw-medium">{tag}</span>
                            })
                        }
                    </div>
                }
            </div>
        </div>
    );
}

export default ExperienceCard;