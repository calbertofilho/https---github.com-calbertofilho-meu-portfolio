import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Carlos Alberto ETI</title>
      </Head>

      <header className={styles.header}>
        <div className={styles.logo}>
          <Link href="#">
            <a><Image src="/logo.png" alt="Carlos Alberto ETI Logo" width="322" height="94" /></a>
          </Link>
        </div>

        <div className={styles.menu}>
          <Link href="#Contato">
            <a className={styles.btn}>Contato</a>
          </Link>
          &nbsp;
          <Link href="http://mail.lberto.eti.br/">
            <a className={styles.btn}>Webmail</a>
          </Link>
          &nbsp;
          <Link href="#">
            <a className={styles.btn}>App</a>
          </Link>
          &nbsp;
          <Link href="#">
            <a className={styles.btn}>Portfólio</a>
          </Link>
        </div>
      </header>

      <main className={styles.main}>
        {/* <iframe src="https://www.canva.com/design/DAEonCTEy38/BdIyfrextOhv_ynAc3oXMw/view?embed" width="100%" height="100%" frameBorder="0" allowFullScreen sandbox /> */}
        <Link href="#">
          <a>
            <Image src="/home.png" alt="Carlos Alberto ETI Home" width="2008" height="1180" />
          </a>
        </Link>
        <br />
        <Link href="#Contato">
          <a id="Contato">
            <Image src="/contato.png" alt="Carlos Alberto ETI Contato" width="2008" height="1180" />
          </a>
        </Link>

      </main>

      <footer className={styles.footer}>
        <span className={styles.delimiters}>[</span>
          <span className={styles.values}>2020</span>&nbsp;<span className={styles.delimiters}>&copy;</span>&nbsp;<span className={styles.values}>{new Date().getFullYear()}</span>
        <span className={styles.delimiters}>]</span>
        &nbsp;&nbsp;
        <Link href="http://www.carlosalberto.eti.br">
          <a>www.carlosalberto.eti.br</a>
        </Link>
      </footer>
    </div>
  )
}
