import { useAppDispatch, useAppSelector } from "@/store";
import reservationsSlice, {
  reservationActions,
} from "@/store/reservations-slice";
import Link from "next/link";
import { FC, useState } from "react";
const Single: FC<{ id: string; number: string; status: string }> = (props) => {
  const [showInfo, setShowInfo] = useState(false);
  const dispatch = useAppDispatch();

  const descriptionHandler = () => {
    setShowInfo(!showInfo);
    dispatch(
      reservationActions.setRooms({
        id: props.id,
        number: props.number,
        type: "Single room",
        price: 50,
      })
    );
  };
  return (
    <>
      <span
        className={`xl:w-4vw xl:h-2vw w-8vw h-4vw ${
          props.status === "free"
            ? "bg-aquaButton"
            : "bg-red-600 pointer-events-none"
        } rounded-sm border-grey border-2 hover:cursor-pointer`}
        onClick={descriptionHandler}
      />
      {showInfo && (
        <div className="absolute top-0 h-full left-0  sm:w-full  bg-white rounded-xl w-full block  bg-single-room bg-cover ">
          <div className="flex flex-col h-full w-full bg-imageOpacity gap-5 py-5 px-8 justify-center items-center rounded-xl">
            <div className="w-9/12 h-3/5 rounded-3xl bg-imageOpacity mx-auto "></div>

            <div className="flex flex-col w-9/12 gap-2 items-end">
              <div className="flex flex-row text-xl justify-between w-1/2">
                <span className="text-textGrey">Room type</span>
                <span className="text-white">Single room</span>
              </div>
              <div className="flex flex-row text-xl justify-between w-1/2">
                <span className="text-textGrey">Room number</span>
                <span className="text-white">{props.number}</span>
              </div>
              <div className="flex flex-row text-xl justify-between w-1/2">
                <span className="text-textGrey">Price</span>
                <span className="text-white">50$</span>
              </div>
              <div className="flex flex-row w-1/2">
                <button
                  className=" w-max px-5 py-2 rounded-lg font-poppins font-normal text-white bg-aquaButton mx-auto"
                  onClick={descriptionHandler}
                >
                  Decline
                </button>
                <Link
                  href="/reservations/payment"
                  className="text-white bg-aquaButton font-poppins font-normal py-2 w-max px-5 rounded-lg mx-auto"
                >
                  Reservation
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Single;
