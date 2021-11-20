import Link from 'next/link'
import styles from './Styles.module.css'

export default function Footer() {
    return (
        <nav className={styles.menu}>
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
        </nav>
    );
}
