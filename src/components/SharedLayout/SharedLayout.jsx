import { Outlet, NavLink } from 'react-router-dom';
import { Suspense } from 'react';
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
                <Suspense fallback={<div>LOADING</div>}>

                    <Outlet />
                </Suspense>
            </main>
        </div>
    );
}
