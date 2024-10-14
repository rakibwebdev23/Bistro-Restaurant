import { FaEdit } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useHooks from "../../../hooks/useHooks";
import { RiDeleteBin6Line } from "react-icons/ri";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ManageItems = () => {
    const [menu, , refetch] = useHooks();
    const axiosSecure = useAxiosSecure();

    const handleDeleteItem = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: `${item.name} are you delete this item`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/menu/${item._id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: `${item.name} has been deleted.`,
                                icon: "success"
                            });
                        }
                    })

            }
        });
    }

    return (
        <div>
            <SectionTitle
                heading="Manage all items"
                subHeading="Hurry up"
            ></SectionTitle>
            <h2 className="text-4xl font-bold uppercase my-8">Total Items: {menu.length}</h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="font-bold text-xl bg-orange-300">
                                <th>#</th>
                                <th>Item Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                menu.map((item, i) => <tr key={item._id} className="hover:bg-slate-200">
                                    <td className="font-bold">
                                        {i + 1}
                                    </td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squire h-12 w-12">
                                                    <img
                                                        src={item.image}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <td className=" font-bold">
                                        {item.name}
                                    </td>
                                    <td className="text-right">
                                        $ {item.price}
                                    </td>
                                    <td>
                                        <Link to={`/dashboard/updateItem/${item._id}`}><button className="btn bg-orange-400 text-white text-xl btn-md font-bold hover:text-orange-500"><FaEdit></FaEdit></button></Link>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDeleteItem(item)} className="btn bg-red-600 text-white text-xl btn-md font-bold hover:text-red-600"><RiDeleteBin6Line></RiDeleteBin6Line></button>
                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageItems;