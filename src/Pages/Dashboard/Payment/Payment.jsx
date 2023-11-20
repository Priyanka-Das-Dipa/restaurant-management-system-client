import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutFrom from "./CheckoutFrom";


// publishable key form the website
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Key);

const Payment = () => {

  return (
  <div>

    <SectionTitle heading="Payment" subHeading="Please pay to eat"></SectionTitle>
    <div>
        <Elements stripe={stripePromise}>

            <CheckoutFrom></CheckoutFrom>
        </Elements>
    </div>
  </div>
  
  
  
  );
};

export default Payment;
