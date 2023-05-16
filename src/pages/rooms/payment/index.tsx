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
  const onPayment = async (dates: any, duplicates: any) => {
    if (dates.length > 0) {
      const responsePost = await fetch("/api/payment", {
        method: "POST",
        body: JSON.stringify(dates),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const dataPost = await responsePost.json();
      console.log(dataPost);
    }
    if (duplicates.length > 0) {
      const responseUpdate = await fetch("/api/payment", {
        method: "UPDATE",
        body: JSON.stringify(duplicates),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const dataUpdate = await responseUpdate;
      console.log(dataUpdate);
    }

    router.push("/");
  };
  return <Payment onPayment={onPayment} />;
};
export default PaymentPage;
