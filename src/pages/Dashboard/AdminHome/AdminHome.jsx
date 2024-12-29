import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaBook, FaDollarSign, FaUsers } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie, Legend } from 'recharts';
import { Link } from "react-router-dom";

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const AdminHome = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: stats = [] } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats')
            return res.data;
        }
    });

    const { data: chartData = [] } = useQuery({
        queryKey: ['order-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/order-stats')
            return res.data;
        }
    });

    // Birth chart (first)
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    // custom pie chart
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    const pieChartData = chartData.map(data => {
        return { name: data.category, value: data.totalRevenue }
    });

    return (
        <div>
            <h2 className="text-3xl font-bold mb-10">
                <span>Hi, Welcome</span>
                <span className="text-orange-500 ml-2">
                    {
                        user?.displayName ? user.displayName : <Link className="btn btn-ghost" to="/">Back</Link>
                    }
                </span>
            </h2>
            <div className="stats shadow w-full">
                <div className="stat bg-gradient-to-r from-gray-400 via-blue-500 to-blue-600">
                    <div className="stat-figure text-white">
                        <FaDollarSign className="text-4xl"></FaDollarSign>
                    </div>
                    <div className="stat-title">Revenue</div>
                    <div className="stat-value">{stats.revenue}</div>
                    <div className="stat-desc"></div>
                </div>

                <div className="stat bg-orange-400">
                    <div className="stat-figure text-white">
                        <FaUsers className="text-4xl"></FaUsers>
                    </div>
                    <div className="stat-title">Users</div>
                    <div className="stat-value">{stats.users}</div>
                    <div className="stat-desc"></div>
                </div>

                <div className="stat bg-green-500">
                    <div className="stat-figure text-white">
                        <FaBook className="text-4xl"></FaBook>
                    </div>
                    <div className="stat-title">Menu Items</div>
                    <div className="stat-value">{stats.menuItems}</div>
                    <div className="stat-desc"></div>
                </div>
                <div className="stat bg-gradient-to-r from-blue-600 via-blue-500 to-gray-400">
                    <div className="stat-figure text-orange-600">
                        <FaCartShopping className="text-4xl"></FaCartShopping>
                    </div>
                    <div className="stat-title font-bold">Orders</div>
                    <div className="stat-value">{stats.orders}</div>
                    <div className="stat-desc"></div>
                </div>
            </div>

            <div className="flex justify-between items-center mt-16 bg-slate-300 gap-8">
                <div className="w-1/2">
                    <BarChart
                        width={500}
                        height={300}
                        data={chartData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Bar dataKey="totalQuantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 6]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>
                <div className="w-1/2">
                    <PieChart className="w-full" width={400} height={400}>
                        <Pie
                            data={pieChartData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {pieChartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                            ))}
                        </Pie>
                        <Legend className="text-center"></Legend>
                    </PieChart>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;