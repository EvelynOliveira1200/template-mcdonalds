import styles from "../styles/Header.module.css";
import Image from "next/image";
import logoheader from "../public/logoheader.png";

export default function Header() {
    return (
        <header className={styles.header}>
            <Image className={styles.logo} src={logoheader} alt="Logo" />
        </header>
    );
}
