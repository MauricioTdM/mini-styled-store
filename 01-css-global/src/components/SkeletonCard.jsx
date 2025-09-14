export const SkeletonCard = () => {
    return (
        <div className="skeleton-card">
            <div className="skeleton skeleton__image"></div>
            <div>
                <div className="skeleton skeleton__line" style={{ width: '90%' }}></div>
                <div className="skeleton skeleton__line" style={{ width: '70%' }}></div>
                <div className="skeleton skeleton__line" style={{ width: '50%', marginTop: '16px' }}></div>
                <div className="skeleton skeleton__button"></div>
            </div>
        </div>
    );
};