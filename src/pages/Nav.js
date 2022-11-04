import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Nav() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/blog'>Blog</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
}