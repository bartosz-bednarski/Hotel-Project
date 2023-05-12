import Payment from "@/components/rooms/payment/Payment";
import { useRouter } from "next/router";
interface paymentData {
  dateRange: never[];
  id: string;
  number: string;
  type: string;
  price: number;
  firstName: string;
  secondName: string;
  email: string;
  phoneNumber: string;
}
const PaymentPage = () => {
  const router = useRouter();
  const onPayment = async (paymentData: paymentData) => {
    const response = await fetch("/api/payment", {
      method: "POST",
      body: JSON.stringify(paymentData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    router.push("/");
  };
  return <Payment onPayment={onPayment} />;
};
export default PaymentPage;
