import styles from '@/components/Header.module.css'
import Link from "next/link";

function Header() {
    return (
        <>
            <header>
                
                <div className={styles.card}>
                    <h1>CONCESSIONÁRIA FERRARI</h1>
                    <div className={styles.content}>
                        <nav>
                            <ul>
                                <li><p><Link href="/">HOME</Link></p></li>
                                <li><p><Link href="/listaCarros">LISTA EM TABELA</Link></p></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
}
export default Header;
