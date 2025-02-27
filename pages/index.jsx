import styles from "../styles/Home.module.css";
import Image from "next/image";
import bigtasty from "../public/SORTEIO + CARNA.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Cards from "../components/Cards";

export default function Home() {
    return (
        <div className={styles.container}>
            <Header />

            <div className={styles.fundo}></div> {/* Div de fundo */}

            <main className={styles.main}>
                <section className={styles.esquerdo}>
                    <div className={styles.bloco}>
                        <Cards image="/cardsrapina.png" title="Conheça o Crossfit" text="O CrossFit é um programa de treinamento físico completo que combina exercícios de força, resistência, flexibilidade e cardio." />
                        <Cards image="/cardsrapina.png" title="Conheça o Crossfit" text="O CrossFit é um programa de treinamento físico completo que combina exercícios de força, resistência, flexibilidade e cardio. " />
                        <Cards image="/cardsrapina.png" title="Conheça o Crossfit" text="O CrossFit é um programa de treinamento físico completo que combina exercícios de força, resistência, flexibilidade e cardio." />
                    </div>
                </section>

                <section className={styles.direito}>
                    <Image className={styles.imgdireita} src={bigtasty} alt="Big Tasty" />
                </section>
            </main>
            <Footer />
        </div>
    );
}