import Rooms from "@/components/rooms/Rooms";
import { useAppDispatch } from "@/store";
import { reservationActions } from "@/store/reservations-slice";
import { MongoClient } from "mongodb";
import { useRouter } from "next/router";
const RoomsPage = () => {
  return <Rooms />;
};
export default RoomsPage;
