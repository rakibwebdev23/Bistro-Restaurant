import { FaAddressBook, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaUsers, FaUtensils } from "react-icons/fa";
import { IoCartSharp } from "react-icons/io5";
import { MdOutlineRestaurantMenu, MdPayment, MdRateReview } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useCarts from "../hooks/useCarts";

const Dashboard = () => {
    const [cart] = useCarts();
    const isAdmin = true;
    return (
        <div className="flex">
            {/* dashboard sidebar */}
            <div className="w-66 min-h-screen bg-orange-300">
                <ul className="menu p-6 uppercase gap-4">
                    {
                        isAdmin ? <>
                            <li><NavLink to="/dashboard/adminHome">
                                <FaHome></FaHome>
                                Admin Home
                            </NavLink></li>
                            <li><NavLink to="/dashboard/addItems">
                                <FaUtensils></FaUtensils>
                                Add Items
                            </NavLink></li>
                            <li><NavLink to="/dashboard/manageItems">
                                <FaList></FaList>
                                Manage Items
                            </NavLink></li>
                            <li><NavLink to="/dashboard/manageBookings">
                                <FaBook></FaBook>
                                Manage Bookings
                            </NavLink></li>
                            <li><NavLink to="/dashboard/allUsers">
                                <FaUsers></FaUsers>
                                All Users
                            </NavLink></li>
                        </>
                            :
                            <>
                                <li><NavLink to="/dashboard/userHome">
                                    <FaHome></FaHome>
                                    User Home
                                </NavLink></li>
                                <li><NavLink to="/dashboard/reservation">
                                    <FaCalendar></FaCalendar>
                                    Reservation
                                </NavLink></li>
                                <li><NavLink to="/dashboard/payment">
                                    <MdPayment></MdPayment>
                                    Payment History
                                </NavLink></li>
                                <li><NavLink to="/dashboard/cart">
                                    <IoCartSharp></IoCartSharp>
                                    My Cart ({cart.length})
                                </NavLink></li>
                                <li><NavLink to="/dashboard/review">
                                    <MdRateReview></MdRateReview>
                                    Add Review
                                </NavLink></li>
                                <li><NavLink to="/dashboard/booking">
                                    <FaAddressBook></FaAddressBook>
                                    Add Booking
                                </NavLink></li>
                            </>
                    }

                    {/* Public shared component */}
                    <div className="divider"></div>
                    <li><NavLink to="/">
                        <FaHome></FaHome>
                        Home
                    </NavLink></li>
                    <li><NavLink to="/order/salad">
                        <MdOutlineRestaurantMenu />
                        Menu
                    </NavLink></li>
                    <li><NavLink to="/order/salad">
                        <FaEnvelope></FaEnvelope>
                        Contact
                    </NavLink></li>
                </ul>

            </div>
            {/* dashboard contet  */}
            <div className="flex-1 p-10">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;