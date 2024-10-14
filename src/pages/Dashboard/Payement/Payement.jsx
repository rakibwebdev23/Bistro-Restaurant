import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOut from "./CheckOut";

const stripePromise = loadStripe(import.meta.env.VITE_Payement_Gateway_PK);

const Payement = () => {
    return (
        <div>
            <SectionTitle
                heading="Payement"
                subHeading="Payement to eat"
            ></SectionTitle>
            <div className="mt-10">
                <Elements stripe={stripePromise}>
                    <CheckOut></CheckOut>
                </Elements>
            </div>
        </div>
    );
};

export default Payement;