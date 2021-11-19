import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Carlos Alberto ETI</title>
      </Head>

      <Header />
      <main className={styles.main}>
        <Link href="#Sobre">
          <section id="Sobre">
            <Image src="/sobre.png" alt="Carlos Alberto ETI Home" width="2008" height="1180" />
          </section>
        </Link>
        <Link href="#Contato">
          <section id="Contato">
            <Image src="/contato.png" alt="Carlos Alberto ETI Contato" width="2008" height="1180" />
          </section>
        </Link>
      </main>
      <Footer />
    </div>
  )
}
