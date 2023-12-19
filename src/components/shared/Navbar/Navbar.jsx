import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/')
            })
            .catch(error => console.log(error))
    }
    const navItems = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/admission' >Apply</NavLink></li>
        <li><NavLink to='/mycollege' >Applied Course</NavLink></li>
        <li>{user?.email == 'adminmeraj@gmail.com'&& <NavLink to='/addCourse' >Add Course</NavLink>}</li>
    </>
    return (
        <div className="navbar bg-black text-white font-bold opacity-50 fixed z-30 w-full px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Course Hub</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {user?.displayName && <p className='mr-2'>{user?.displayName}</p>}
                {user ?
                    <button onClick={handleLogOut} className='btn btn-sm btn-error'>Log Out</button> :
                    <Link to='/login'><button className='btn btn-sm btn-info'>Login</button></Link>

                }
            </div>
        </div>
    );
};

export default Navbar;