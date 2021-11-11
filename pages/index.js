import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Carlos Alberto ETI [Home]</title>
      </Head>

      <header className={styles.header}>
        <div className={styles.logo}>
          <Link href="http://www.carlosalberto.eti.br">
            <a><Image src="/logo.png" alt="Carlos Alberto ETI Logo" width="322" height="94" /></a>
          </Link>
        </div>

        <div className={styles.menu}>
          <Link href="#">
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
        . . .
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
