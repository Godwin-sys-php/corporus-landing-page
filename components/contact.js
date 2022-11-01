import styles from '../styles/Contact.module.css';

export default function Contact() {
  return (
    <div className={styles.container}>
      <span className={styles.title}>Rejoignez-nous <span className={styles.gold}>en un clique</span></span>
      <span className={styles.subtitle}>Nous faisons passer votre entreprise au <span className={styles.gold}>niveau supérieur</span></span>
      <form className={styles.form}>
        <input className={styles.input} type="text" placeholder='Votre nom' />
        <input className={styles.input} type="text" placeholder='Votre adresse email' />
        <input className={styles.input} type="text" placeholder='Votre numéro de téléphone' />
        <input className={styles.input} type="text" placeholder='Le nom de votre entreprise' />
        <input className={styles.input} type="text" placeholder="Votre secteur d'activité" />
        <textarea className={styles.input} placeholder='Un petit message'></textarea>
        <div className={styles.button}>
          Envoyer
        </div>
      </form>
    </div>
  );
}