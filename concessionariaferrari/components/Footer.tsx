import styles from '@/components/Footer.module.css'

function Footer() {
    return (
        <>
            <footer className={styles.rodape}>
                    <p>{new Date().getFullYear()} &copy; Concessionária Ferrari. Todos os Direitos reservados.</p>
            </footer>
        </>
    );
}
export default Footer;