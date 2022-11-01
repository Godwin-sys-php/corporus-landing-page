import styles from '../styles/Banner.module.css';

export default function Banner() {
  return (
    <div className={styles.bg}>
      <div className={styles.container}>
        Avec Corporus, vous pouvez oublier toute la paperasserie, les fiches de paies, les reçus de caisses et les fiches de stock, et vous concentrer sur ce que vous aimez : gérer votre entreprise.
      </div>
    </div>
  );
}