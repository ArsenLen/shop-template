import React from 'react';

const LoginForm = ({styles}) => {
    return (
        <form className={styles.form}>
                    <h2 className={styles.title}>Login</h2>
                    <div className={styles.control}>
                        <label htmlFor="email" className={styles.label}>Email address</label>
                        <input type="email" placeholder='email' name="email" className={styles.input}/>
                    </div>
                    <div className={styles.control}>
                        <label htmlFor="password" className={styles.label}>Password</label>
                        <input type="passworld" placeholder='pass' name="password" className={styles.input} />
                    </div>
                    <div className={styles.controlCheckbox}>
                        <input type="checkbox" name="checkbox" className={styles.checkbox} />
                        <label htmlFor="checkbox" className={styles.labelCheckbox}>Remember me</label>
                    </div>
                    <input type="submit" value="Log In" className={styles.submit} />
        </form>
    );
};

export default LoginForm;