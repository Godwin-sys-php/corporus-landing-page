import styles from "../styles/Plus.module.css";
import Image from "next/image";
import img1 from "../public/img1.webp";
import img2 from "../public/img2.webp";

export default function Plus() {
  return (
    <div className={styles.bg}>
      <div className={styles.container}>
        <span className={styles.title}>
          Nous fournissons la meilleure solution pour gérer votre stock, vos
          ventes, vos fonds et <br />{" "}
          <span className={styles.gold}>bien plus</span>.
        </span>
        <span className={styles.subtitle}>
          Corporus est un logiciel de gestion modulaire (une infinité de module
          et des modules à la demande) destiné à tout{" "}
          <span className={styles.gold}>type d'entreprise</span>.Il utilise une
          architecture basée sur{" "}
          <span className={styles.gold}>
            le cloud ou local selon la demande
          </span>
          , ce qui lui confère souplesse et évolutivité, tout en préservant la
          sécurité des données. Grâce à une intégration transparente avec les
          systèmes existants et à de puissantes fonctions de création de
          rapports, Corporus dispose de tout ce dont vous avez besoin pour gérer
          l'ensemble de votre entreprise, avec{" "}
          <span className={styles.gold}>
            un contrôle total sur votre activité
          </span>
        </span>
        <div className={styles.containerImg}>
          <div className={styles.img}>
            <Image src={img1} />
          </div>
          <div className={styles.img}>
            <Image src={img2} />
          </div>
        </div>
      </div>
    </div>
  );
}
