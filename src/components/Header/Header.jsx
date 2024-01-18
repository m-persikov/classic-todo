import styles from './Header.module.css';

export const Header = () => {
    return (
        <div className={styles.Header}>
            <h1>Logo</h1>
            <nav>
                <ul className={styles.ul}>
                    <li className={styles.li}>Home</li>
                    <li className={styles.li}>About</li>
                    <li className={styles.li}>Blog</li>
                </ul>
            </nav>
        </div>
    )
}