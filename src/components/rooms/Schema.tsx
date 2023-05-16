import { useAppSelector } from "@/store";
import Apartment from "./schema-items/Apartment";
import Double from "./schema-items/Double";
import King from "./schema-items/King";
import Single from "./schema-items/Single";

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
  const roomsSelector = useAppSelector(
    (item) => item.reservationsReducer.actualData
  );

  const roomsArr = [];
  for (let i = 0; i < roomsSelector.length; i++) {
    roomsArr.push(roomsSelector[i].rooms);
  }
  // const selection = roomsArr.find((item) => item.id);
  // console.log(selection);
  console.log(...roomsArr);
  console.log(ROOMS.find((item) => item.id === "single-06"));
  return (
    <div className="sm:px-10 flex bg-schemaBackgound relative px-5 py-11 h-auto rounded-3xl w-min justify-center">
      <div className="flex flex-col w-auto">
        <div className="flex flex-row justify-between w-full">
          <King id="king-01" number="11" />
          <King id="king-02" number="19" />
        </div>
        <div className="flex flex-row justify-between w-full">
          <div className="flex flex-row xl:w-6vw w-12vw justify-between">
            <Double id="double-01" number="20" />
            <Double id="double-02" number="18" />
          </div>
          <div className="flex flex-row xl:w-6vw w-12vw justify-between">
            <Double id="double-03" number="12" />
            <Double id="double-04" number="10" />
          </div>
        </div>
        <div className="flex flex-row justify-between w-full">
          <div className="flex flex-row xl:w-6vw w-12vw justify-between">
            <Double id="double-05" number="21" />
            <Double id="double-06" number="17" />
          </div>
          <div className="flex flex-row w-auto items-end">
            <Single id="single-08" number="16" />
            <Apartment
              id="apartment-01"
              number="15"
              status={ROOMS.find((item) => item.id === "apartment")}
            />
            <Single id="single-09" number="14" />
          </div>
          <div className="flex flex-row xl:w-6vw w-12vw justify-between">
            <Double id="double-07" number="13" />
            <Double id="double-08" number="09" />
          </div>
        </div>
        <div className="flex flex-row items-end w-full">
          <Double id="double-09" number="22" />
          <Single id="single-01" number="01" />
          <Single id="single-02" number="02" />
          <Single id="single-03" number="03" />
          <Single id="single-04" number="04" />
          <Single id="single-05" number="05" />
          <Single id="single-06" number="06" />
          <Single id="single-07" number="07" />
          <Double id="double-10" number="08" />
        </div>
      </div>
    </div>
  );
};
export default Schema;
