import styles from "../styles/Home.module.css";
import Image from "next/image";
import bigtasty from "../public/bigtasty.jpg";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Cards from "../components/Cards";


export default function Home() {
    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.main}>
                <Cards />

                <section className={styles.direito}>
                    <Image className={styles.img} src={bigtasty} alt="" />
                </section>

            </main>
            <Footer />
        </div>
    );
}