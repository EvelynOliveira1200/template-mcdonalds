import styles from "../styles/Header.module.css";
import Image from "next/image";
import logoheader from "../public/ctrapina.png";

export default function Header() {
    return (
        <header className={styles.header}>
            <Image className={styles.logo} src={logoheader} alt="Logo" />
            <div className={styles.titleheader}>
                <h2>Ct Rapina</h2>

            </div>
        </header>
    );
}
