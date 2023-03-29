import React from 'react';
import styles from './info.module.css';

const Info = () => {
    return (
        <div className={styles.info}>
            <div className={styles.wrapper}>
                <div className={styles.item}>
                    <h5 className={styles.title}>Free Delivery</h5>
                    <p className={styles.text}>
                        For all oders over $50, consectetur adipim scing elit.
                    </p>
                </div>
                <div className={styles.item}>
                    <h5 className={styles.title}>Free Delivery</h5>
                    <p className={styles.text}>
                        For all oders over $50, consectetur adipim scing elit.
                    </p>
                </div>
                <div className={styles.item}>
                    <h5 className={styles.title}>Free Delivery</h5>
                    <p className={styles.text}>
                        For all oders over $50, consectetur adipim scing elit.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Info;