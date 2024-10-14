import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useCarts from '../../hooks/useCarts';
import useAuth from '../../hooks/useAuth';

const FoodCard = ({ item }) => {
    const { name, image, price, recipe, _id } = item;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCarts();

    const handleAddToCart = () => {
        if (user && user.email) {
            // Send cart item to the database
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} added to your carts`,
                            showConfirmButton: false,
                            timer: 2000
                        });
                        // to update the cart item count
                        refetch();
                    }
                })
        }
        else {
            Swal.fire({
                title: "You are not Logged In",
                text: "Please Login to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    // Send the user to the login page
                    navigate("/login", { state: { from: location } })
                }
            });
        }
    }

    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img src={image} alt="Item" />

            </figure>
            <p className='absolute right-0 bg-slate-800 text-white px-2 m-8'>$ {price}</p>
            <div className="card-body">
                <h2 className="card-title text-left font-bold">{name}</h2>
                <p className='text-left'>{recipe}</p>
                <div className="card-actions justify-center">
                    <button onClick={handleAddToCart} className="btn btn-outline border-0 border-b-4 font-bold border-orange-500 text-orange-500">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;