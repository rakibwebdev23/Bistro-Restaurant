import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCarts from "../../../hooks/useCarts";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckOut = () => {
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const navigate = useNavigate();
    const [cart, refetch] = useCarts();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    // console.log(res.data);
                    setClientSecret(res.data.clientSecret);

                });
        }
    }, [axiosSecure, totalPrice]);

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            // console.log('[error]', error);
            setError(error.message);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setError('');
        }
        // Payment confirm in card
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: user?.displayName || 'anonymus',
                    email: user?.email || 'anonymus'
                }
            }
        })
        if (confirmError) {
            // console.log('Error Confirm by payment confirm', confirmError);

        }
        else {
            // console.log('Your confirm payment intent', paymentIntent);
            if (paymentIntent.status === 'succeeded') {
                setTransactionId(paymentIntent.id);
                // console.log('Payment Transaction Id: ', paymentIntent.id);

                // now save the payment history in the database
                const paymetInfo = {
                    email: user.email,
                    price: totalPrice,
                    transactionId: paymentIntent.id,
                    date: new Date(), //utc date convert. use moment js to
                    cartItemIds: cart.map(item => item._id),
                    menuItemIds: cart.map(item => item.menuId),
                    status: 'pending'
                }

                const res = await axiosSecure.post('/payments', paymetInfo);
                // console.log('payment info saved: ', res.data);
                refetch();
                if (res.data?.paymentRes?.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your payment successfully!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/dashboard/paymentHistory');
                }

            }
        }
    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '20px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                ></CardElement>
                <p className="text-red-500 mt-2">{error}</p>
                {transactionId && <p className="text-green-500">Your Transaction id: {transactionId}</p>}
                <button className="btn btn-primary my-10" type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>

            </form>
        </div>
    );
};

export default CheckOut;