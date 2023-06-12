import { useAppDispatch, useAppSelector } from "@/store";
import reservationsSlice, {
  reservationActions,
} from "@/store/reservations-slice";
import Link from "next/link";
import { FC, useState } from "react";

const Apartment: FC<{ id: string; number: string; status: string }> = (
  props
) => {
  const dispatch = useAppDispatch();

  return (
    <>
      <div
        className={`xl:w-12vw xl:h-2vw w-24vw h-4vw ${
          props.status === "free"
            ? "bg-aquaButton"
            : "bg-red-600 pointer-events-none"
        }  rounded-sm border-grey border-2  hover: cursor-pointer`}
        onClick={() =>
          dispatch(
            reservationActions.setRooms({
              id: props.id,
              number: props.number,
              type: "Apartment",
              price: 120,
              description:
                "The apartment in Sapphire Palace is an ideal option for guests who are looking for spacious and luxurious accommodation. The apartment is fully equipped with all necessary amenities, including air conditioning, a flat-screen TV with satellite channels, and a desk with a chair. The apartment also has a large bathroom with a shower, a hairdryer, and a complimentary set of toiletries. Additionally, the apartment has a large balcony with beautiful views of the Mediterranean Sea, which is an ideal place to relax and admire the surroundings.",
              img: "/assets/rooms/bedroom-g12e25ce3a_1920.jpg",
            })
          )
        }
      />
    </>
  );
};
export default Apartment;
