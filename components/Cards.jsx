import styles from "../styles/Cards.module.css";

export default function Cards({ image, title, text }) {
    return (
        <div className={styles.bloco}>
            <img src={image} alt={title} className={styles.imagembloco} />
            <div className={styles.elementos}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.textp}>{text}</p>
            </div>
        </div>
    );
}