import React from 'react';
import styles from './product.module.css'

const Product = () => {
    const gridView = true
    return (
        <div className={gridView ? styles.card : styles["card-list"]}>
            <img src="" alt="" className={styles.img} />
            <div className={styles.info}>
                <a href="/" className={styles.name}>
                Test Title
                </a>
                <h4 className={styles.price}>
                    50000 KGS
                </h4>
                <p>{new Date().toString()}</p>
            </div>
        </div>
    );
};

export default Product;