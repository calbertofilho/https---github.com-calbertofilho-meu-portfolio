import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Carlos Alberto ETI [Portfólio]</title>
      </Head>

      <header className={styles.header}>
        &lt;Image&gt;LOGO&lt;/Image&gt; Carlos Alberto ETI
      </header>

      <main className={styles.main}>
        . . .
      </main>

      <footer className={styles.footer}>
        <Link href="http://www.carlosalberto.eti.br">
          <a target="_blank">www.carlosalberto.eti.br</a>
        </Link>
        &nbsp;
        <span className={styles.delimiters}>&copy;</span>
        &nbsp;
        <span className={styles.delimiters}>[</span>
          <span className={styles.values}>2020 - {new Date().getFullYear()}</span>
        <span className={styles.delimiters}>]</span>
      </footer>
    </div>
  )
}
