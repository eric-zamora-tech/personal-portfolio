interface SkillProps {
    name?: string,
    proficiency?: number
}

function Skill({ name, proficiency }: SkillProps) {

    function getProficiencyLevel() {
        if (proficiency == null) return;

        if (proficiency >= 75) {
            return "Advanced";
        }
        else if (proficiency >= 60) {
            return "Intermediate";
        }
        else if (proficiency >= 50) {
            return "Familiar";
        }
    }

    return (
        <div>
            <div className="mb-2 hstack justify-content-between">
                {name && <div className="small fw-medium">{name}</div>}
                <div className="small">
                    <small className="text-body-tertiary">{getProficiencyLevel()}</small>
                </div>
            </div>
            <div className="progress" role="progressbar" style={{ height: '4px' }}>
                <div className="progress-bar" style={{ width: `${proficiency}%` }}></div>
            </div>
        </div>
    );
}

export default Skill;