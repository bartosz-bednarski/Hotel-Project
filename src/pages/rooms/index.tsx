import Rooms from "@/components/rooms/Rooms";
import { useAppDispatch } from "@/store";
import { reservationActions } from "@/store/reservations-slice";
import { MongoClient } from "mongodb";
import { useRouter } from "next/router";
const RoomsPage = () => {
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
    console.log(data);
    return data;
  };

  return <Rooms onReservations={onReservations} />;
};
export default RoomsPage;
