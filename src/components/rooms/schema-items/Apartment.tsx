import { useAppDispatch, useAppSelector } from "@/store";
import reservationsSlice, {
  reservationActions,
} from "@/store/reservations-slice";
import Link from "next/link";
import { FC, useState } from "react";

const Apartment: FC<{ id: string; number: string }> = (props) => {
  const [showInfo, setShowInfo] = useState(false);
  const dispatch = useAppDispatch();
  const data = useAppSelector(
    (state) => state.reservationsReducer.toPaymentData
  );

  const descriptionHandler = () => {
    setShowInfo(!showInfo);
    dispatch(
      reservationActions.setRooms({ id: props.id, number: props.number })
    );

    console.log(data);
  };
  return (
    <>
      <div
        className="xl:w-12vw xl:h-2vw w-24vw h-4vw bg-aquaButton rounded-sm border-grey border-2 relative hover:cursor-pointer"
        onClick={descriptionHandler}
      >
        {showInfo && (
          <div className="absolute bottom-10 left-0 h-auto sm:w-full w-auto bg-aquaCard rounded-xl shad flex flex-col gap-2 p-3 ">
            <span className="text-center text-gold font-bold">Apartment</span>
            <span>Room: {props.number}</span>
            <span>Price: 120$</span>
            <Link
              href="/rooms/payment"
              className="bg-white w-max px-5 rounded-lg text-aquaCard mx-auto"
            >
              <button
                className="bg-white w-max px-5 rounded-lg text-aquaCard mx-auto"
                onClick={() => dispatch(reservationActions.redirectToPayment())}
              >
                Reservation
              </button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};
export default Apartment;
