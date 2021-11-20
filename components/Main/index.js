import Image from 'next/image'
import Link from 'next/link'
import styles from './Styles.module.css'

export default function Main() {
    return (
        <main className={styles.main}>

            <Link href="#Sobre" passHref>
                <section id="Sobre">
                    <Image src="/sobre.png" alt="Carlos Alberto ETI Home" width="2008" height="1180" />
                </section>
            </Link>
            <Link href="#Contato" passHref>
                <section id="Contato">
                    <Image src="/contato.png" alt="Carlos Alberto ETI Contato" width="2008" height="1180" />
                </section>
            </Link>

        </main>
    );
}
