import Header from "@/components/header/Header";
import Reservations from "@/components/reservations/Reservations";
import { useRouter } from "next/router";
const ReservationsPage = () => {
  const router = useRouter();

  const onReservations = async (dates: Date[]) => {
    const response = await fetch("/api/reservations", {
      method: "POST",
      body: JSON.stringify(dates),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  };
  return (
    <>
      <Header />
      <Reservations onReservations={onReservations} />
    </>
  );
};
export default ReservationsPage;
