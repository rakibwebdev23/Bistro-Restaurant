import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import useCarts from "../../../hooks/useCarts";
import useAuth from "../../../hooks/useAuth";

const Navbar = () => {
    const { user, logOut } = useAuth();
    const [cart] = useCarts();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error);
            })
    }

    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/menu'>Our Menu</Link></li>
        <li><Link to='/order/salad'>Order Food</Link></li>
        <li>
            <Link to="/dashboard/cart">
                <button className="flex gap-2 items-center">
                        <FaShoppingCart className="font-bolt text-xl text-orange-500"></FaShoppingCart>
                        <p className="badge border-none text-white bg-orange-500">+{cart.length}</p>
                </button>
            </Link>
        </li>
        {/* {
            user ? <><li><Link onClick={handleLogOut}>Log Out</Link></li>
            </> : <>
                <li><Link to='/login'>Login</Link></li>
            </>
        } */}

    </>

    return (
        <div className="navbar fixed z-10 max-w-screen-xl text-white bg-opacity-20 bg-black">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-xl">BISTRO BOSS</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <Link onClick={handleLogOut} className="btn btn-ghost">Log Out</Link> : <Link className="btn btn-ghost" to="/login">Login</Link>
                }
                {/* <a className="btn btn-ghost text-white">Button</a> */}
            </div>
        </div>
    );
};

export default Navbar;