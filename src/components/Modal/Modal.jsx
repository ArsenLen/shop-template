import React from "react";
import styles from "./modal.module.css";

const Modal = () => {
  const isOpen = false
  return (
    isOpen && (
        <div className={styles.wrapper}>
      <div className={styles.content}>
        <img
          src="/images/basket-close-icon.png"
          alt=""
          className={styles.close}
        />
        <h2 className={styles.title}>Shopping Cart</h2>
        <div className={styles.line}></div>
        <div className={styles.products}>
          <div className={styles.product}>
            <img src="/images/test-product-img.png" alt="" />
            <div className={styles.info}>
              <h5 className={styles.name}>Asgaard Sofa</h5>
              <p>1 x Rs. 250,000.000</p>
            </div>
            <img src="/images/close-icon.png" alt="" />
          </div>
        </div>
        <div className={styles.bottom}>
        <div className={styles.total}>
            <p className={styles.subtotal}>Subtotal</p> Rs. 250,000.00
        </div>
        <div className={styles.line}></div>
            <a href="/cart" className={styles.link}>View Cart</a>
            <a href="/checkout" className={styles.link}>Checkout</a>
        </div>
      </div>
    </div>
    )
  );
};

export default Modal;
