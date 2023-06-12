import { useAppDispatch, useAppSelector } from "@/store";
import reservationsSlice, {
  reservationActions,
} from "@/store/reservations-slice";
import Link from "next/link";
import { FC, useState } from "react";
const Single: FC<{ id: string; number: string; status: string }> = (props) => {
  const dispatch = useAppDispatch();
  return (
    <>
      <span
        className={`xl:w-4vw xl:h-2vw w-8vw h-4vw ${
          props.status === "free"
            ? "bg-aquaButton"
            : "bg-red-600 pointer-events-none"
        } rounded-sm border-grey border-2 hover:cursor-pointer`}
        onClick={() =>
          dispatch(
            reservationActions.setRooms({
              id: props.id,
              number: props.number,
              type: "Single room",
              price: 50,
              description:
                "The single room at Sapphire Palace is the perfect place for solo travelers. It has been equipped with all necessary amenities to provide maximum comfort and relaxation to our guests. The room features a comfortable bed, air conditioning, and a flat-screen TV with satellite channels. Additionally, the room is equipped with a desk and chair, making it ideal for work or study in comfortable conditions. The bathroom with a shower and complimentary toiletries provides our guests with comfortable conditions for personal hygiene. Beautiful views of the surrounding area can be seen from the room's windows.",
              img: "/assets/rooms/bedroom-g57f6bfa9e_1920.jpg",
            })
          )
        }
      />
    </>
  );
};
export default Single;
