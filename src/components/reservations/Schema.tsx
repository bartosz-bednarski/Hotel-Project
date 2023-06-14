import { useAppSelector } from "@/store";
import Apartment from "./schema-items/Apartment";
import Double from "./schema-items/Double";
import King from "./schema-items/King";
import Single from "./schema-items/Single";
import { useEffect } from "react";

const ROOMS = [
  {
    id: "single-01",
    status: "free",
  },
  {
    id: "single-02",
    status: "free",
  },
  {
    id: "single-03",
    status: "free",
  },
  {
    id: "single-04",
    status: "free",
  },
  {
    id: "single-05",
    status: "free",
  },
  {
    id: "single-06",
    status: "free",
  },
  {
    id: "apartment-01",
    status: "free",
  },
];
const Schema = () => {
  const roomsForSchema = useAppSelector(
    (room) => room.reservationsReducer.roomsForSchema
  );

  // const selection = roomsArr.find((item) => item.id);
  // console.log(selection);

  // console.log(ROOMS.find((item) => item.id === "single-06"));
  return (
    <div className="sm:px-10 flex bg-schemaBackgound relative px-5 py-11 h-auto rounded-3xl w-min justify-center">
      <div className="flex flex-col w-auto">
        <div className="flex flex-row justify-between w-full">
          <King id="king-01" number="11" status={roomsForSchema[19].status} />
          <King id="king-02" number="19" status={roomsForSchema[20].status} />
        </div>
        <div className="flex flex-row justify-between w-full">
          <div className="flex flex-row xl:w-6vw w-12vw justify-between">
            <Double
              id="double-01"
              number="20"
              status={roomsForSchema[9].status}
            />
            <Double
              id="double-02"
              number="18"
              status={roomsForSchema[10].status}
            />
          </div>
          <div className="flex flex-row xl:w-6vw w-12vw justify-between">
            <Double
              id="double-03"
              number="12"
              status={roomsForSchema[11].status}
            />
            <Double
              id="double-04"
              number="10"
              status={roomsForSchema[12].status}
            />
          </div>
        </div>
        <div className="flex flex-row justify-between w-full">
          <div className="flex flex-row xl:w-6vw w-12vw justify-between">
            <Double
              id="double-05"
              number="21"
              status={roomsForSchema[13].status}
            />
            <Double
              id="double-06"
              number="17"
              status={roomsForSchema[14].status}
            />
          </div>
          <div className="flex flex-row w-auto items-end">
            <Single
              id="single-08"
              number="16"
              status={roomsForSchema[7].status}
            />
            <Apartment
              id="apartment-01"
              number="15"
              status={roomsForSchema[21].status}
              // key={roomsForSchema[6].status}
            />
            <Single
              id="single-09"
              number="14"
              status={roomsForSchema[8].status}
            />
          </div>
          <div className="flex flex-row xl:w-6vw w-12vw justify-between">
            <Double
              id="double-07"
              number="13"
              status={roomsForSchema[15].status}
            />
            <Double
              id="double-08"
              number="09"
              status={roomsForSchema[16].status}
            />
          </div>
        </div>
        <div className="flex flex-row items-end w-full">
          <Double
            id="double-09"
            number="22"
            status={roomsForSchema[17].status}
          />
          <Single
            id="single-01"
            number="01"
            status={roomsForSchema[0].status}
          />
          <Single
            id="single-02"
            number="02"
            status={roomsForSchema[1].status}
          />
          <Single
            id="single-03"
            number="03"
            status={roomsForSchema[2].status}
          />
          <Single
            id="single-04"
            number="04"
            status={roomsForSchema[3].status}
          />
          <Single
            id="single-05"
            number="05"
            status={roomsForSchema[4].status}
          />
          <Single
            id="single-06"
            number="06"
            status={roomsForSchema[5].status}
          />
          <Single
            id="single-07"
            number="07"
            status={roomsForSchema[6].status}
          />
          <Double
            id="double-10"
            number="08"
            status={roomsForSchema[18].status}
          />
        </div>
      </div>
    </div>
  );
};
export default Schema;
