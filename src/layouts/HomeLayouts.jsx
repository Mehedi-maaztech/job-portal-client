import React from 'react';
import Navbar from '../component/Navbar';
import { Outlet } from 'react-router';

const HomeLayouts = () => {
    return (
        <div>
            <header className='max-w-7xl mx-auto'>
                <Navbar></Navbar>
            </header>
            <main className='max-w-7xl mx-auto'>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default HomeLayouts;