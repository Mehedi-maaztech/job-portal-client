import React from 'react';
import Navbar from '../component/Navbar';
import { Outlet } from 'react-router';
import Footer from '../component/Footer';

const HomeLayouts = () => {
    return (
        <div>
            <header className='max-w-7xl mx-auto'>
                <Navbar></Navbar>
            </header>
            <main className='max-w-7xl mx-auto'>
                <Outlet></Outlet>
            </main>
            <footer className='max-w-7xl mx-auto'>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayouts;