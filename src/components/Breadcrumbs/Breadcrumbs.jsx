import React from 'react';
import styles from './breadcrumbs.module.css'

const Breadcrumbs = () => {
    return (
        <div className={styles.wrapper}>
            <img src="/images/breadcrumb-logo.png" alt="" className={styles.icon} />
            <h1>Title</h1>
            <p className={styles.breadcrumb}>Home &#8594; Page</p>
        </div>
    );
};

export default Breadcrumbs;