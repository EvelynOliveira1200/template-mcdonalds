import styles from "../styles/Home.module.css";
import Image from "next/image";
import bigtasty from "../public/bigtasty.jpg";
import lanche from "../public/lanche1.png";
import lanche2 from "../public/lanche2.png";
import lanche3 from "../public/lanche3.png";
import Header from "../components/Header";
import Footer from "../components/Footer";


export default function Home() {
    return (
        <div className={styles.container}>
            <Header />
        <main className={styles.main}>
           <section className={styles.esquerdo}>
            <div className={styles.bloco}>
                <Image className={styles.imglunch} src={lanche} alt="" />
                <div className={styles.text}>
                <h2>Tasty Turbo 2 carnes</h2>
                <p>Os novos sanduíches contêm dois hambúrgueres de carne 100% bovina. O peso total da carne "in natura" (somando-se os dois hambúrgueres) aumentou em 51,7% / 77,6 g, passando de 150 g para 227,6 g, em comparação com o peso total de carne "in natura" (um hambúrger) presente nas versões anteriores. Composto pelo icônico molho tasty, queijo processado sabor emental, tomate, alface, cebola, tudo isso no pão com gergelim.</p>
                </div>
            </div>
            <div className={styles.bloco}>
            <Image className={styles.imglunch} src={lanche2} alt="" />
            <div className={styles.text}>
                <h2>Novo Brabo ClubHouse</h2>
                <p>Os novos sanduíches contém dois hambúrgueres de carne 100% bovina. O peso total da carne "in natura" (somando-se os dois hambúrgueres) aumentou em 51,7% / 77,6 g, passando de 150 g para 227,6 g, em comparação com o peso total de carne "in natura" (um hambúrger) presente nas versões anteriores, méquinese, a exclusiva maionese especial com sabor de carne defumada, alface e tomate, fatias de bacon, queijo processado sabor emental, molho especial e cebola ao molho shoyu, tudo isso no pão tipo brioche trazendo uma explosão de sabores pros seus dias de glória!</p>
                </div>
            </div>
            <div className={styles.bloco}>
                <Image className={styles.imglunch} src={lanche3} alt="" />
                <div className={styles.text}>
                <h2>Big Mac</h2>
                <p>Dois hambúrgueres (100% carne bovina), alface americana, queijo processado sabor cheddar, molho especial, cebola, picles e pão com gergelim.</p>
                </div>
            </div>
           </section>

           <section className={styles.direito}>
                <Image className={styles.img} src={bigtasty} alt="" />
           </section>
        </main>

        <Footer />
        </div>
    );

}