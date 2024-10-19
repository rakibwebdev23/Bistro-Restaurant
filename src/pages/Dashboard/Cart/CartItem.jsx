import { RiDeleteBin6Line } from 'react-icons/ri';
import useCarts from '../../../hooks/useCarts';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const CartItem = ({ cartItem, index }) => {
    
    const { image, price, name, _id } = cartItem;
    const [, refetch] = useCarts();
    const axiosSecure = useAxiosSecure();

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        // console.log(res.data);
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch();
                        }
                    })
            }
        });
    }

    return (
        <tr className='w-full '>
            <th>
                {index + 1}
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                                src={image}
                                alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td className='text-xl font-bold'>
                {name}
            </td>
            <td className='text-xl font-semibold'>$ <span className='text-orange-500'>{price}</span></td>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-ghost btn-lg"><RiDeleteBin6Line /></button>
            </th>
        </tr>
    );
};

export default CartItem;