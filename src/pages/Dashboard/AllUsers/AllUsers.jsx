import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllUsers = () => {

    const axiosSecure = useAxiosSecure();

    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get("/users");
            return res.data;
        }
    })
    return (
        <div>
            <div className="text-4xl font-bold flex justify-evenly uppercase items-center">
                <h2>All Users</h2>
                <h2>Total Users {users.length}</h2>
            </div>
            <div className="overflow-x-auto mt-10">
                <table className="table">
                    {/* head */}
                    <thead className="bg-orange-300">
                        <tr className="text-xl font-bold rounded-xl">
                            <th>
                                #
                            </th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Roll</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) =>
                                <tr key={user._id} className="bg-slate-100 hover:bg-slate-200">
                                    <td>{index + 1}</td>
                                    <td className="font-bold">{ user.name}</td>
                                    <td>{ user.email}</td>
                                    <td>Roll</td>
                                    <th><button className="btn btn-ghost">Pay</button></th>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;