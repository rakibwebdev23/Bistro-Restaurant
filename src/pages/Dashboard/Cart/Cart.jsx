import { Link } from 'react-router-dom';
import useCarts from '../../../hooks/useCarts';
import CartItem from './CartItem';

const Cart = () => {

    const [cart] = useCarts();
    const totalPrices = cart.reduce((total, item) => total + item.price, 0);
    const totalPrice = totalPrices.toFixed(4);

    return (
        <div>
            <div className="text-4xl font-bold flex justify-evenly uppercase items-center">
                <h2>Items: {cart.length}</h2>
                <h2>Total Price: {totalPrice}</h2>

                {
                    cart.length ? <Link to="/dashboard/payement"><button className="btn btn-outline btn-warning">Pay</button></Link> : <button disabled className="btn btn-outline btn-warning">Pay</button>
                }

            </div>
            <div className='mt-10'>
                <div className="overflow-x-auto p-6">
                    <table className="table">
                        {/* head */}
                        <thead className='font-bold text-xl bg-orange-300'>
                            <tr className=''>
                                <th>
                                    #
                                </th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((cartItem, index) => <CartItem
                                    key={cartItem._id}
                                    cartItem={cartItem}
                                    index={index}
                                ></CartItem>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;