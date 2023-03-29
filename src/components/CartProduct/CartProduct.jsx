import React from 'react';
import styles from './cartproduct.module.css';

const CartProduct = () => {
    return (
        <div className={styles.wrapper}>
            <img src="" alt="" className={styles.img} />
            <p className={styles.name}>test Title</p>
            <p className={styles.price}>50000</p>
            <p className={styles.quantity}>1</p>
            <p className={styles.subtotal}>1</p>
            <button><img src="images/delete-icon.png" alt="" /></button>
        </div>
    );
};

export default CartProduct;