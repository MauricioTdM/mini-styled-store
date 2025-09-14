import styles from './SkeletonCard.module.css';

export const SkeletonCard = () => {
    return (
        <div className={styles.skeletonCard}>
            <div className={`${styles.skeleton} ${styles.image}`}></div>
            <div>
                <div className={`${styles.skeleton} ${styles.line}`} style={{ width: '90%' }}></div>
                <div className={`${styles.skeleton} ${styles.line}`} style={{ width: '70%' }}></div>
                <div className={`${styles.skeleton} ${styles.line}`} style={{ width: '50%', marginTop: '16px' }}></div>
                <div className={`${styles.skeleton} ${styles.button}`}></div>
            </div>
        </div>
    );
};