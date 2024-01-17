import style from './Header.module.css';

export const Header = () => {
    return (
        <div className={style.Header}>
            <h1>Logo</h1>
            Header
            <nav>
                <ul>
                    <li>Profile</li>
                    <li>Messages</li>
                </ul>
            </nav>
        </div>
    )
}