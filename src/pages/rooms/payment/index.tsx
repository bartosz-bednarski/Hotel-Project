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
    console.log(duplicates, typeof duplicates[0]);
    if (dates[0] != undefined) {
      const responsePost = await fetch("/api/payment", {
        method: "POST",
        body: JSON.stringify(dates),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const dataPost = await responsePost.json();
      console.log(dataPost);
    } else if (duplicates[0] != undefined) {
      const responseUpdate = await fetch("/api/payment", {
        method: "PUT",
        body: JSON.stringify(duplicates),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const dataUpdate = await responseUpdate.json();
      console.log(dataUpdate);
    }

    router.push("/");
  };
  return <Payment onPayment={onPayment} />;
};
export default PaymentPage;
