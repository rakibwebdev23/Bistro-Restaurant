import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaBook, FaDollarSign, FaUsers } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const AdminHome = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: stats = [] } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats')
            return res.data;
        }
    })

    return (
        <div>
            <h2 className="text-3xl font-bold mb-10">
                <span>Hi, Welcome</span>
                <span className="text-orange-500 ml-2">
                    {
                        user?.displayName ? user.displayName : 'Back'
                    }
                </span>
            </h2>
            <div className="stats shadow w-full">
                <div className="stat bg-gradient-to-r from-gray-400 via-blue-500 to-blue-600">
                    <div className="stat-figure text-secondary">
                        <FaDollarSign className="text-4xl"></FaDollarSign>
                    </div>
                    <div className="stat-title">Revenue</div>
                    <div className="stat-value">{ stats.revenue}</div>
                    <div className="stat-desc"></div>
                </div>

                <div className="stat bg-orange-400">
                    <div className="stat-figure text-white">
                       <FaUsers className="text-4xl"></FaUsers>
                    </div>
                    <div className="stat-title">Users</div>
                    <div className="stat-value">{ stats.users}</div>
                    <div className="stat-desc"></div>
                </div>

                <div className="stat bg-green-500">
                    <div className="stat-figure text-white">
                        <FaBook className="text-4xl"></FaBook>
                    </div>
                    <div className="stat-title">Menu Items</div>
                    <div className="stat-value">{ stats.menuItems}</div>
                    <div className="stat-desc"></div>
                </div>
                <div className="stat bg-gradient-to-r from-blue-600 via-blue-500 to-gray-400">
                    <div className="stat-figure text-orange-600">
                    <FaCartShopping className="text-4xl"></FaCartShopping>
                    </div>
                    <div className="stat-title font-bold">Orders</div>
                    <div className="stat-value">{ stats.orders}</div>
                    <div className="stat-desc"></div>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;