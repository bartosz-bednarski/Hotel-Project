import { useAppDispatch, useAppSelector } from "@/store";
import { reservationActions } from "@/store/reservations-slice";
import { redirect } from "next/navigation";
import { useRouter } from "next/router";
import { FC, FormEvent, useEffect } from "react";
import { useForm, SubmitHandler, appendErrors } from "react-hook-form";

interface IFormInput {
  firstName: string;
  secondName: string;
  email: string;
  phoneNumber: string;
}
interface onPayment {
  dates: [
    {
      _id: Date | String;
      rooms: [
        {
          key: {
            id: string;
            number: string;
            type: string;
            price: number;
            firstName: string;
            secondName: string;
            email: string;
            phoneNumber: string;
          };
        }
      ];
    }
  ];
}
const Payment: FC<{
  onPayment: (paymentData: onPayment) => any;
}> = (props) => {
  // const dispatch = useAppDispatch();
  // const reduxData = useAppSelector(
  //   (item) => item.reservationsReducer.dataToSend
  // );
  const dateRange = useAppSelector(
    (item) => item.reservationsReducer.dateRange
  );
  const room = useAppSelector((item) => item.reservationsReducer.room);
  const actualData = useAppSelector(
    (item) => item.reservationsReducer.actualData
  );
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const dates: any[] = [];
    for (let i = 0; i < dateRange.length; i++) {
      dates.push({
        _id: new Date(dateRange[i]).toISOString(),
        rooms: [
          {
            id: room.id,
            number: room.number,
            type: room.type,
            price: room.price,
            firstName: data.firstName,
            secondName: data.secondName,
            email: data.email,
            phoneNumber: data.phoneNumber,
          },
        ],
      });
    }
    ///ZNALEZC DUPLIKATY
    const duplicates = [];
    for (let x = 0; x < dates.length; x++) {
      for (let j = 0; j < actualData.length; j++) {
        if (dates[x]._id === actualData[j]._id) {
          duplicates.push({
            _id: dates[x]._id,
            rooms: dates[x].rooms.concat(...actualData[j].rooms),
          });
          dates.splice(x, 1);
          // duplicates.rooms.push(actualData[j].rooms);
          console.log("hello");
          // actualData[j].rooms.push(dates[i]._id.rooms);
        }
      }
    }
    console.log(duplicates);
    console.log(actualData);
    console.log(dates);
    props.onPayment(
      dates,
      duplicates

      //   {
      //   dateRange: dateRange,
      //   id: room.id,
      //   number: room.number,
      //   type: room.type,
      //   price: room.price,
      //   firstName: data.firstName,
      //   secondName: data.secondName,
      //   email: data.email,
      //   phoneNumber: data.phoneNumber,
      // }
    );
    // dispatch(
    //   reservationActions.setDataToSend({
    //     name: data.firstName,
    //     surname: data.secondName,
    //     email: data.email,
    //     phoneNumber: data.phoneNumber,
    //   })
    // );
    console.log(data);
  };

  const { push } = useRouter();
  useEffect(() => {
    if (dateRange.length < 1) {
      push("/rooms");
    }
  }, [dateRange]);

  const checkIn = dateRange[0];
  const checkOut = dateRange[dateRange.length - 1];
  const priceTotal =
    (new Date(checkOut).getDate() - new Date(checkIn).getDate()) * room.price;
  return (
    <div className="flex flex-col h-screen box-border py-10 pl-32 justify-center bg-reception bg-cover">
      <div className="flex flex-row w-full   h-auto gap-24">
        <div className="flex flex-col w-2/5  h-auto  items-center gap-10 justify-center">
          <span className="2xl:text-7xl justify-end sm:px-0 sm:text-5xl px-4 text-3xl sm:mb-20 mb-10 flex flex-row gap-2 font-radley  text-gold items-center">
            <span>Sapphire</span>
            <img src="/assets/logo.svg" className="2xl:w-20 w-12" />
            <span>Palace</span>
          </span>

          <form
            className="flex flex-col w-full  h-auto  items-center gap-10 justify-center"
            onSubmit={handleSubmit(onSubmit)}
          >
            <span className="flex flex-col w-3/4 gap-2">
              <label className="text-white font-poppins text-xl font-normal w-full">
                Name
              </label>
              <input
                className="w-full bg-gray-200 text-gray-700   rounded py-3 px-4  leading-tight  focus:bg-white shadow-sm "
                placeholder="Your name"
                {...register("firstName", {
                  required: true,
                })}
                aria-invalid={errors.firstName ? "true" : "false"}
              />
              {errors.firstName?.type === "required" && (
                <p className="text-red-500">Enter your first name</p>
              )}
            </span>
            <span className="flex flex-col w-3/4 gap-2">
              <label className="text-white font-poppins text-xl font-normal">
                Surname
              </label>
              <input
                className=" w-full bg-gray-200 text-gray-700 rounded py-3 px-4  leading-tight  focus:bg-white shadow-sm "
                {...register("secondName", { required: true })}
                aria-invalid={errors.secondName ? "true" : "false"}
              />
              {errors.secondName?.type === "required" && (
                <p className="text-red-500">Enter your second name</p>
              )}
            </span>
            <span className="flex flex-col w-3/4 gap-2">
              <label className="text-white font-poppins text-xl font-normal ">
                E-mail
              </label>
              <input
                className=" w-full bg-gray-200 text-gray-700  rounded py-3 px-4  leading-tight  focus:bg-white  shadow-sm"
                {...register("email", {
                  required: true,
                  pattern:
                    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
                aria-invalid={errors.email ? "true" : "false"}
              />
              {errors.email?.type === "pattern" && (
                <p className="text-red-500">Your e-mail is incorrect</p>
              )}
              {errors.email?.type === "required" && (
                <p className="text-red-500">E-mail is required</p>
              )}
            </span>
            <span className="flex flex-col w-3/4 gap-2">
              <label className="text-white font-poppins text-xl font-normal ">
                Phone number
              </label>
              <input
                type="number"
                className=" w-full bg-gray-200 text-gray-700 rounded py-3 px-4  leading-tight  focus:bg-white  shadow-sm"
                {...register("phoneNumber", {
                  required: true,
                  minLength: 9,
                })}
                aria-invalid={errors.phoneNumber ? "true" : "false"}
              />
              {errors.phoneNumber?.type === "required" && (
                <p className="text-red-500">Phone number is required</p>
              )}
              {errors.phoneNumber?.type === "minLength" && (
                <p className="text-red-500">Invalid phone number</p>
              )}
            </span>
            <button
              className="bg-aquaButton py-3 px-4 w-3/4 text-white font-poppins text-xl font-normal rounded-3xl shadow-sm"
              type="submit"
            >
              Pay now
            </button>
          </form>
        </div>
        <div className="w-3/5 flex flex-col h-full gap-8 items-center justify-end">
          <div className="flex flex-col bg-aquaCard h-auto w-9/12 p-7 rounded-xl gap-12 shadow-lg shadow-gray-600">
            <span className="text-4xl text-gold font-poppins font-medium">
              Hotel Card
            </span>
            <div className="flex flex-row justify-between items-center">
              <img src="/assets/logo.svg" className="2xl:w-20 w-12" />
              <div className="flex flex-col gap-4 text-right">
                <span className="text-2xl font-poppins font-normal text-white">
                  Room type: {room.type}
                </span>
                <span className="text-2xl font-poppins font-normal text-white">
                  Room number: {room.number}
                </span>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center">
              <span className="text-3xl text-white font-poppins font-normal">
                John Doe
              </span>
              <span className="2xl:text-4xl justify-center sm:px-0 sm:text-5xl px-4 text-3xl  flex flex-row gap-2 font-radley  text-gold items-center">
                <span>Sapphire</span>
                <img src="/assets/logo.svg" className="2xl:w-16 w-12" />
                <span>Palace</span>
              </span>
            </div>
          </div>
          <div className="flex flex-row bg-aquaButton h-auto w-9/12 p-7 rounded-xl gap-16 shadow-lg shadow-gray-600">
            <div className="flex flex-col gap-6 w-2/5 text-white">
              <div className="bg-aquaButton flex flex-col  w-full px-6 rounded-3xl justify-center">
                <span className=" sm:text-4xl desktop:text-4xl xl:text-2xl text-xl py-4 border-gold border-b-2 text-center">
                  {new Date(checkIn).getDate() - 1}
                  {new String(checkIn).slice(3, 7)}
                </span>
                <span className="sm:text-2xl desktop:text-2xl xl:text-lg text-base text-center py-2">
                  Check-in
                </span>
              </div>
              <div className="bg-aquaButton flex flex-col  w-full px-6 rounded-3xl justify-center">
                <span className=" sm:text-4xl desktop:text-4xl xl:text-2xl text-xl py-4 border-gold border-b-2 text-center">
                  {new Date(checkOut).getDate() - 1}
                  {new String(checkOut).slice(3, 7)}
                </span>
                <span className="sm:text-2xl desktop:text-2xl xl:text-lg text-base text-center py-2">
                  Check-out
                </span>
              </div>
            </div>
            <div className="flex flex-col text-gold font-poppins w-3/5 gap-4">
              <span className="text-3xl mb-5 font-semibold text-center">
                Summary
              </span>
              <div className="w-full flex flex-row justify-between">
                <span className="text-2xl font-normal text-textGrey">
                  Room Type
                </span>
                <span className="text-2xl font-normal text-white">
                  {room.type}
                </span>
              </div>
              <div className="w-full flex flex-row justify-between">
                <span className="text-2xl font-normal text-textGrey">
                  Room Number
                </span>
                <span className="text-2xl font-normal text-white">
                  {room.number}
                </span>
              </div>
              <div className="w-full flex flex-row justify-between">
                <span className="text-2xl font-normal text-textGrey">
                  Price per night
                </span>
                <span className="text-2xl font-normal text-white">
                  {room.price}$
                </span>
              </div>
              <div className="w-full flex flex-row justify-between border-gold border-t-2 py-3">
                <span className="text-2xl font-normal text-textGrey">
                  Total
                </span>
                <span className="text-2xl font-normal text-white">
                  {priceTotal}$
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Payment;
