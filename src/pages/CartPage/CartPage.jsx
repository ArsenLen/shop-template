import React from 'react';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import CartProduct from '../../components/CartProduct/CartProduct';
import styles from './cartpage.module.css'

//4242 4242 4242 4242

const CartPage = () => {
    return (
      <>
        <Breadcrumbs  />
        <section className={styles.cart}>
          <div className={styles.wrapper}>
            <div className={styles.products}>
              <div className={styles.header}>
                <p className={styles.name}></p>
                <p className={styles.name}>Product</p>
                <p className={styles.name}>Price</p>
                <p className={styles.name}>Quantity</p>
                <p className={styles.name}>Subtotal</p>
                <p className={styles.name}></p>
              </div>
              <CartProduct />
            </div>
            <div className={styles.totals}>
              <h3 className={styles.title}>Cart totals</h3>
              <p className={styles.subtotal}>
                Subtotal <span>50000</span>
              </p>
              <p className={styles.total}>
                Total <span>50000</span>
              </p>
              <a href="/checkout" className={styles.checkout}>Check Out</a>
            </div>
          </div>
        </section>
      </>
    );
};

export default CartPage;