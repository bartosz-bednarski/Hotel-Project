import { useAppDispatch, useAppSelector } from "@/store";
import reservationsSlice, {
  reservationActions,
} from "@/store/reservations-slice";
import Link from "next/link";
import { FC, useState } from "react";
const Double: FC<{ id: string; number: string; status: string }> = (props) => {
  const dispatch = useAppDispatch();

  return (
    <>
      <button
        className={`xl:w-2vw xl:h-6vw w-4vw h-12vw ${
          props.status === "free"
            ? "bg-aquaButton"
            : "bg-red-600 pointer-events-none"
        } rounded-sm border-grey border-2 hover: cursor-pointer`}
        onClick={() =>
          dispatch(
            reservationActions.setRooms({
              id: props.id,
              number: props.number,
              type: "Double room",
              price: 80,
              description:
                "The room for a couple at Sapphire Palace is the perfect place for a romantic getaway for two. The room has been carefully designed to provide our guests with maximum comfort and relaxation. The room features a large and comfortable queen-size bed, air conditioning, a flat-screen TV with access to satellite channels. The bathroom has a shower and a complimentary toiletries set, providing our guests with comfortable conditions for personal hygiene. Towels and a hairdryer are also provided in the room. ",
              img: "/assets/rooms/hotel-room-g39ed91d20_1920.jpg",
            })
          )
        }
        role="button"
      />
    </>
  );
};
export default Double;
