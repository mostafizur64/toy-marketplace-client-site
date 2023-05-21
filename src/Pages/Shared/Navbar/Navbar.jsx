import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
const Navbar = () => {
    const navigate = useNavigate()
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut().then(() => {
            navigate('/')
        }).catch((error) => {
            console.log(error);
        });
    }
    console.log(user);
    const navItems = <>
        < li> <Link to='/'>Home</Link> </li>
        < li> <Link to='/Blog'>Blog</Link> </li>
        < li> <Link to='/allToy'>All Toys</Link> </li>
        {
            user ?
                <>  < li> <Link to='/addToy'>Add Toy</Link> </li>
                    < li> <Link to='/myToys'>My Toys</Link> </li>

                    <img className=' h-8 w-8  rounded-full mr-2 lg:mt-2' src={user.photoURL} title={user.displayName} alt="" />

                    <li> <button onClick={handleLogOut}>LogOut</button>    </li></>
                : < li> <Link to='/login'>Login</Link> </li>
        }

    </>
    return (
        <div className="navbar bg-base-200 rounded-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to='/'> <img className="h-12 w-12 rounded-full inline-block" src="https://i.ibb.co/bQ4Sq00/46708d75d6ba97b6706acddb43f175d9.webp" alt="" />
                    <a className="text-xl text-orange-500 ml-2">Animal toys</a></Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>

        </div>
    );
};

export default Navbar;