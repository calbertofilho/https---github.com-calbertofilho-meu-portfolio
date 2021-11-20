import Link from 'next/link'
import styles from './Styles.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <span className={styles.delimiters}>[</span>
            <span className={styles.values}>2020</span>&nbsp;<span className={styles.delimiters}>&copy;</span>&nbsp;<span className={styles.values}>{new Date().getFullYear()}</span>
            <span className={styles.delimiters}>]</span>
            &nbsp;&nbsp;
            <Link href="http://www.carlosalberto.eti.br">
                <a>www.carlosalberto.eti.br</a>
            </Link>
      </footer>
    );
}
