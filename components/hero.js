import styles from "../styles/Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.heroImage}>
      <div className={styles.heroText}>
        <span>Au revoir les feuilles de calcul.</span><br />
        <span>Bienvenue dans le futur !</span>
      </div>
    </div>
  );
}
