import styles from '../styles/Feature.module.css';

export default function Feature() {
  return (
    <div className={styles.container}>
      <span className={styles.title}>Pour être le meilleur, vous devez travailler avec <span className={styles.gold}>le meilleur</span>.</span>
      <span className={styles.subtitle}>Un puissant logiciel de gestion modulaire et personnalisable à l'infini pour tout type d'entreprise.</span>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <span className={styles.cardTitle}>Gestion d'inventaire</span>
          <span className={styles.cardContent}>La gestion d'inventaire n'a jamais été aussi simple. Corporus vous permet d'accéder instantanément au niveau de vos stocks. Il vous fournit un résumé de votre inventaire à tout moment, avec des informations détaillées sur les transactions qui s'y sont faites.</span>
        </div>
        <div className={styles.card}>
          <span className={styles.cardTitle}>Gestion de caisse / de fond</span>
          <span className={styles.cardContent}>Finis les feuilles de calculs et les coupons de caisses. Rentrez en temps réel vos dépenses et revenus dans Corporus avec la catégorisation. Un résumé vous sera accessible à tout instant sous le format souhaiter.</span>
        </div>
        <div className={styles.card}>
          <span className={styles.cardTitle}>Gestion de vente</span>
          <span className={styles.cardContent}>Corporus vous permet de gérer facilement votre stock et votre clientèle. La gestion des ventes est automatisée, tout en gardant la trace de vos ventes et de vos clients. Ces fonctionnalités fonctionnent toutes ensemble pour fournir une analyse précise de vos ventes.</span>
        </div>
      </div>
      <div className={styles.button}>
        Et une infinité de modules
      </div>
      <br />
      <span className={styles.micro}>Imaginez votre entreprise au bout de vos doigts</span>
    </div>
  );
}