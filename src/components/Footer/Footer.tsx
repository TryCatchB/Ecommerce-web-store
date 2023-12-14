import { FC } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import LOGO from "../../images/logo.svg";
import styles from "../../styles/Footer.module.css";

const Footer: FC = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <img src={LOGO} alt="Stuff" />
        </Link>
      </div>

      <div className={styles.rights}>
        Developed by
        <a href="https://github.com/TryCatchB" target="_blank" rel="noreferrer">
          Zhenek
        </a>
      </div>

      <div className={styles.socials}>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <svg className={styles.icon}>
            <use xlinkHref="/sprite.svg#instagram" />
          </svg>
        </a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <svg className={styles.icon}>
            <use xlinkHref="/sprite.svg#facebook" />
          </svg>
        </a>
        <a href="https://youtube.com" target="_blank" rel="noreferrer">
          <svg className={styles.icon}>
            <use xlinkHref="/sprite.svg#youtube" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Footer;
