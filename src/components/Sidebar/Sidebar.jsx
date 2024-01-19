import { NavLink } from 'react-router-dom';

import style from './Sidebar.module.css';

const setActive = ({ isActive }) => isActive ? 'active-link' : '';

export const Sidebar = () => {
    return (
        <div className={style.Sidebar}>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" className={setActive}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/messages" className={setActive}>Messages</NavLink>
                    </li>
                    <li>
                        <NavLink to="/posts" className={setActive}>Posts</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}