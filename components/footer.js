import Image from "next/image";
import styles from "../styles/Footer.module.css";
import logo from "../public/logo.png";

export default function Footer() {
  return (
    <div className={styles.bg}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image src={logo} layout="fill" objectFit="contain" width={500} />
        </div>
        <div className={styles.dataContainer}>
          <span className={styles.data}>+243 815 461 960</span>
          <span className={styles.data}>hello@corporus.org</span>
          <span className={styles.data}>corporus.org</span>
        </div>
      </div>
    </div>
  );
}
