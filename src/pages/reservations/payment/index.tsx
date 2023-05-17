import Payment from "@/components/rooms/payment/Payment";
import { useRouter } from "next/router";
import { uniqueDates, duplicates } from "@/types/payment";
const PaymentPage = () => {
  const router = useRouter();
  const onPayment = async (
    uniqueDates: uniqueDates | any,
    duplicates: duplicates | any
  ) => {
    if (uniqueDates[0] != undefined) {
      const responsePost = await fetch("/api/payment", {
        method: "POST",
        body: JSON.stringify(uniqueDates),
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
