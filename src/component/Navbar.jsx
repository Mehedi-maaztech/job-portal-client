import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import logo from '../assets/logo.png';
const Navbar = () => {
    const { user, logoutUser } = useContext(AuthContext);
    const links = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to={`/myApplications/${user?.email}`}>My Applications</Link></li>
        <li><Link to='/'>Employers</Link></li>
        <li><Link to='/'>Blogs</Link></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to='/' className="normal-case text-xl w-40">
                    <img src={logo} alt="Logo" className="mr-2 object-cover"/>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div>
                            <span className='mr-4'> {user.email}</span>
                            <button onClick={logoutUser} className="btn">Logout</button>
                        </div>
                        :
                        <Link to='/auth/signin'>
                            <button className="btn">Sign In</button>
                        </Link>
                }

            </div>
        </div>
    );
};

export default Navbar;