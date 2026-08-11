function ProfileCard() {
    return (
        <div className="card rounded-4 overflow-hidden">
            <div className="card-img-top d-flex justify-content-center" style={{ maxWidth: '320px', height: '370px' }}>
                <img className="h-100" src="profile-picture.jpg" />
            </div>
            <div className="card-body p-0">
                <div className="border-bottom bg-body-secondary px-3 hstack justify-content-between" style={{ paddingTop: '10px', paddingBottom: '10px' }}>
                    <span className="font-monospace text-body-tertiary small">location</span>
                    <span className="font-monospace small">Texas, USA</span>
                </div>
                <div className="border-bottom bg-body-secondary px-3 hstack justify-content-between" style={{ paddingTop: '10px', paddingBottom: '10px' }}>
                    <span className="font-monospace text-body-tertiary small">timezone</span>
                    <span className="font-monospace small">Chicago</span>
                </div>
                <div className="bg-body-secondary px-3 hstack justify-content-between" style={{ paddingTop: '10px', paddingBottom: '10px' }}>
                    <span className="font-monospace text-body-tertiary small">status</span>
                    <span className="font-monospace small hstack gap-2">
                        <div className="ratio ratio-1x1" style={{ width: '5px' }}>
                            <div className="bg-primary bg-opacity-75 rounded-circle"></div>
                        </div>
                        <span className="text-primary">Open to Opportunities</span>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;