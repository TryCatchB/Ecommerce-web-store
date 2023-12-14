import { FC } from "react";
import BG from "../../images/computer.png";
import styles from "../../styles/Home.module.css";

const Poster: FC = () => {
  return (
    <section className={styles.home}>
      <div className={styles.title}>BIG SALE 20%</div>
      <div className={styles.product}>
        <div className={styles.text}>
          <div className={styles.subtitle}>The bestseller of 2023</div>
          <h1 className={styles.head}>LENNON r2d2 with NVIDIA 5090 TI</h1>
          <button type="button" className={styles.button}>
            Shop now
          </button>
        </div>
        <div className={styles.image}>
          <img src={BG} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Poster;
