import React from 'react';
import { Link } from "react-router-dom";
import styles from './Header.module.css';

const Header = () => {
    return (
      <div className={styles.header}>
        <Link to="/" className={styles.name}>
          <div className={styles.logo}>
            <img className={styles.logoImg} src="https://www.flaticon.com/svg/static/icons/svg/3010/3010995.svg" alt="logo"/>
          </div>
          Unique Stays
        </Link>
        <nav className={styles.right}>
          <ul>
            <li>
              <Link className={styles.link} to="/AboutUs">About Us</Link>
            </li>
            <li>
              <Link className={styles.link} to="/ContactUs">Contact Us</Link>
            </li>
            <li>
              <Link className={styles.link} to="/HowItWorks">How It Works</Link>
            </li>
            <li>
              <Link className={styles.link} to="/TrustSafety">Trust & Safety</Link>
            </li>
          </ul>
        </nav>
      </div>
    )
}

export default Header
