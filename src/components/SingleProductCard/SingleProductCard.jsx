import React from 'react';
import styles from './singleproductcard.module.css'

const SingleProductCard = () => {
    return (
        <div className={styles.card}>
            <div className={styles.wrapper}>
                <div className={styles["img-wrapper"]}>
                    <img src={img} alt="" />
                </div>
                <div className={styles.info}>
                    <h1 className={styles.title}>Test Title</h1>
                    <p className={styles.price}>10000</p>
                    <p className={styles.descr}>Test descr</p>
                    <div className={styles["control-wrapper"]}>
                        <div className={styles.quantity}>
                            <button className={styles["quantity-control"]}>-</button> 
                                <span>1</span>
                            <button className={styles["quantity-control"]}>+</button>
                        </div>
                        <button className={styles.add}>
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProductCard;