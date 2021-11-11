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
        <Image src="/logo.png" alt="Carlos Alberto ETI Logo" width="322" height="94" />
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
          <a target="_blank">www.carlosalberto.eti.br</a>
        </Link>
      </footer>
    </div>
  )
}
