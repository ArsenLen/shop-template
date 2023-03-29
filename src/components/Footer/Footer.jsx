import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <p className={styles.address}>
        400 University Drive Suite 200 Coral Gables, <br/> FL 33134 USA
      </p>
      <div className={styles.content}>
        <ul className={styles.nav}>
            <h6 className={styles["links-title"]}>Link</h6>
            <li className={styles["nav-item"]}>
                <a href="" className={styles.link}>Home</a>
            </li>
            <li className={styles["nav-item"]}>
                <a href="" className={styles.link}>Shop</a>
            </li>
            <li className={styles["nav-item"]}>
                <a href="" className={styles.link}>About</a>
            </li>
            <li className={styles["nav-item"]}>
                <a href="" className={styles.link}>Contact</a>
            </li>
        </ul>
        <ul className={styles.nav}>
            <h6 className={styles["links-title"]}>Help</h6>
            <li className={styles["nav-item"]}>
                <a href="" className={styles.link}>Payment Options</a>
            </li>
            <li className={styles["nav-item"]}>
                <a href="" className={styles.link}>Returns</a>
            </li>
            <li className={styles["nav-item"]}>
                <a href="" className={styles.link}>Privacy Policy</a>
            </li>
        </ul>
        <ul className={styles.nav}>
            <h6 className={styles["links-title"]}>Newsletter</h6>
        </ul>
      </div>
      <div className={styles.line}></div>
      <p className={styles.copyright}>
      2022 Meubel House. All rights reverved
      </p> 
    </footer>
  );
};

export default Footer;
