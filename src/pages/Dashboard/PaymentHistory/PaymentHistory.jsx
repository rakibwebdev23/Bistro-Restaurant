import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data;
        }
    })

    return (
        <div>
            <SectionTitle
                subHeading="History"
                heading="Your Payment History"
            ></SectionTitle>
            <h2 className="text-3xl mt-10 font-bold">Total Payment: {payments.length}</h2>
            <div className="mt-6">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-orange-400 text-xl font-bold">
                            <tr>
                                <th>#</th>
                                <th>Email</th>
                                <th>Transaction Id</th>
                                <th>Price</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                payments.map((payment,index) => <tr key={payment._id} className="bg-base-200 w-full">
                                    <td>{ index + 1}</td>
                                    <td>{ payment.email}</td>
                                    <td>{ payment.transactionId}</td>
                                    <td>$ { payment.price}</td>
                                    <td>{ payment.status}</td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;