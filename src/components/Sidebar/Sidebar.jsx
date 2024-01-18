import { Suspense } from 'react';
import { Link } from 'react-router-dom';

import style from './Sidebar.module.css';

export const Sidebar = () => {
    return (
        <div className={style.Sidebar}>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/messages">Messages</Link>
                    </li>
                    <li>
                        <Link to="/posts">Posts</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}