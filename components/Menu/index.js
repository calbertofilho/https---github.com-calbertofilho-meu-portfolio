import Link from 'next/link'
import styles from './Styles.module.css'

export default function NavBar() {
    return (
        <nav className={styles.menu}>
            <Link href="http://mail.lberto.eti.br/" passHref>
                <a className={styles.btn}>@</a>
            </Link>
            &nbsp;
            <Link href="#Contato" passHref>
                <a className={styles.btn}>Contato</a>
            </Link>
            &nbsp;
            <Link href="#Sobre" passHref>
                <a className={styles.btn}>Sobre</a>
            </Link>
            &nbsp;
            <Link href="#" passHref>
                <a className={styles.btn}>App</a>
            </Link>
            &nbsp;
            <Link href="#" passHref>
                <a className={styles.btn}>Download</a>
            </Link>
            &nbsp;
            <Link href="#" passHref>
                <a className={styles.btn}>Portfólio</a>
            </Link>
        </nav>
    );
}
