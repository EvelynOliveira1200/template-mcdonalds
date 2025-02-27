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

            <main className={styles.main}>
                
                <div className={styles.fundo}></div>

                <section className={styles.esquerdo}>
                <div className={styles.bloco}>
                <Cards image="/lanche1.png" title="Tasty Turbo 2 carnes" text="Os novos sanduíches contêm dois hambúrgueres de carne 100% bovina. O peso total da carne in natura (somando-se os dois hambúrgueres) aumentou em 51,7% / 77,6 g, passando de 150 g para 227,6 g, em comparação com o peso total de carne in natura (um hambúrger) presente nas versões anteriores. Composto pelo icônico molho tasty, queijo processado sabor emental, tomate, alface, cebola, tudo isso no pão com gergelim." />
                <Cards image="/lanche1.png" title="Tasty Turbo 2 carnes" text="Os novos sanduíches contêm dois hambúrgueres de carne 100% bovina. O peso total da carne in natura (somando-se os dois hambúrgueres) aumentou em 51,7% / 77,6 g, passando de 150 g para 227,6 g, em comparação com o peso total de carne in natura (um hambúrger) presente nas versões anteriores. Composto pelo icônico molho tasty, queijo processado sabor emental, tomate, alface, cebola, tudo isso no pão com gergelim." />
                <Cards image="/lanche1.png" title="Tasty Turbo 2 carnes" text="Os novos sanduíches contêm dois hambúrgueres de carne 100% bovina. O peso total da carne in natura (somando-se os dois hambúrgueres) aumentou em 51,7% / 77,6 g, passando de 150 g para 227,6 g, em comparação com o peso total de carne in natura (um hambúrger) presente nas versões anteriores. Composto pelo icônico molho tasty, queijo processado sabor emental, tomate, alface, cebola, tudo isso no pão com gergelim." />
                </div>
                </section>

                <section className={styles.direito}>
                    <Image className={styles.img} src={bigtasty} alt="Big Tasty" layout="responsive" width={500} height={500} />
                </section>

            </main>
            <Footer />
        </div>
    );
}