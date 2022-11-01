import Image from 'next/image';
import styles from "../styles/Navbar.module.css";
import logo from "../public/logo.png";

export default function Navbar() {
  return (
    <div className={styles.nav}>
      <div>
        <Image src={logo} width="350" />
      </div>
    </div>
  );
}