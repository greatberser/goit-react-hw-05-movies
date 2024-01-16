import { Outlet, NavLink } from 'react-router-dom';
import css from './SharedLayout.module.css';

export default function SharedLayout() {
    return (
        <div>
            <header className={css.header}>
                <nav className={css.nav}>
                    <NavLink className={css.navLink} to={'/'} exact="true">
                        Home
                    </NavLink>
                    <NavLink className={css.navLink} to={'/movies'}>
                        Movies
                    </NavLink>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
}
