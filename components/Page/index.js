import Head from 'next/head'
import styles from './Styles.module.css'

export default function Page({title, description, children}) {
    return (
        <div className={styles.container}>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            {children}
        </div>
    );
}
