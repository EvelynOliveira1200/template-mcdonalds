import styles from "../styles/Cards.module.css";

export default function Cards({ title, text, image }) {
    return (
        <div className={styles.bloco}>
                <div className={styles.imagembloco}>{image && <img src={image} />}</div>
                <div className={styles.text}>
                <h2>{title}</h2>
                <p>{text}</p>
                </div>
        </div>
    );
}