import React from 'react';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import LoginForm from '../../components/LoginForm/LoginForm';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import styles from "./accountpage.module.css"

const AccountPage = () => {
    return (
        <div>
            <Breadcrumbs  />
            <div className={styles.wrapper}>
                <LoginForm styles={styles} />

                <RegisterForm styles={styles} />
            </div>
        </div>
    );
};

export default AccountPage;