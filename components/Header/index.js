import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

export default function Footer() {
    return (
        <header className={styles.header}>
        <div className={styles.logo}>
        <Link href="#">
            <a><Image src="/logo.png" alt="Carlos Alberto ETI Logo" width="322" height="94" /></a>
        </Link>
        </div>

        <div className={styles.menu}>
        <Link href="http://mail.lberto.eti.br/">
            <a className={styles.btn}>@</a>
        </Link>
        &nbsp;
        <Link href="#Contato">
            <a className={styles.btn}>Contato</a>
        </Link>
        &nbsp;
        <Link href="#Sobre">
            <a className={styles.btn}>Sobre</a>
        </Link>
        &nbsp;
        <Link href="#">
            <a className={styles.btn}>App</a>
        </Link>
        &nbsp;
        <Link href="#">
            <a className={styles.btn}>Download</a>
        </Link>
        &nbsp;
        <Link href="#">
            <a className={styles.btn}>Portfólio</a>
        </Link>
        </div>
        </header>
    );
}
