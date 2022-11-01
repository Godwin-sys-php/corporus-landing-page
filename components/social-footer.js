import styles from '../styles/Social-Footer.module.css';

export default function SocialFooter() {
  return (
    <div className={styles.bg}>
      <div className={styles.container}>
        <span className={styles.copyright}>Copyright Corporus 2022</span>
      </div>
    </div>
  );
}