import { useAppDispatch, useAppSelector } from "@/store";
import reservationsSlice, {
  reservationActions,
} from "@/store/reservations-slice";
import Link from "next/link";
import { FC, useState } from "react";
const King: React.FC<{ id: string; number: string; status: string }> = (
  props
) => {
  const dispatch = useAppDispatch();

  return (
    <>
      <button
        className={`xl:w-6vw xl:h-2vw w-12vw h-4vw ${
          props.status === "free"
            ? "bg-aquaButton"
            : "bg-red-600 pointer-events-none"
        } rounded-sm border-grey border-2 hover:cursor-pointer`}
        onClick={() =>
          dispatch(
            reservationActions.setRooms({
              id: props.id,
              number: props.number,
              type: "King room",
              price: 100,
              description:
                "A room with a king-size bed and a sea view at Sapphire Palace is an excellent choice for those seeking to combine luxury and stunning views. Equipped with high-quality furnishings and elegantly styled, this room offers not only a comfortable sleep but also unforgettable visual experiences. From the large and cozy king-size bed, you can indulge in spectacular views of the azure waters of the Mediterranean Sea without even leaving the room. By spending time in this room, you'll merge relaxation with an incredible sea view, creating unforgettable memories of your stay at Sapphire Palace.",
              img: "/assets/rooms/pexels-max-rahubovskiy-7546724.jpg",
            })
          )
        }
        role="button-room"
      />
    </>
  );
};
export default King;
