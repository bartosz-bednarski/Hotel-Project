import { useAppSelector } from "@/store";
import { useRouter } from "next/router";
import { FC, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { uniqueDates, duplicates, IFormInput } from "@/types/payment";
import Image from "next/image";
const Payment: FC<{
  onPayment: (uniqueDates: any, duplicates: any) => any;
}> = (props) => {
  const dateRange = useAppSelector(
    (item) => item.reservationsReducer.dateRange
  );
  const room = useAppSelector((item) => item.reservationsReducer.room);
  const actualData = useAppSelector(
    (item) => item.reservationsReducer.actualReservationsForDateRange
  );
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const uniqueDates = [];
    for (let i = 0; i < dateRange.length; i++) {
      uniqueDates.push({
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

    const duplicates = [];
    for (let x = 0; x < uniqueDates.length; x++) {
      for (let j = 0; j < actualData.length; j++) {
        if (uniqueDates[x]._id === actualData[j]._id) {
          duplicates.push({
            _id: uniqueDates[x]._id,
            rooms: uniqueDates[x].rooms.concat(...actualData[j].rooms),
          });
          uniqueDates.splice(x, 1);
        }
      }
    }
    console.log(duplicates);
    console.log(actualData);
    console.log(uniqueDates);
    props.onPayment(uniqueDates, duplicates);
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
    <main className="relative flex xl:flex-row flex-col  w-full xl:h-screen h-auto gap-24 py-10  justify-center">
      <Image
        src="/assets/home/lobby-g165055a51_1920.jpg"
        alt="reception"
        fill={true}
        style={{ objectFit: "cover" }}
        priority={true}
      />
      <section className="z-10 flex flex-col xl:w-2/5 w-full  h-auto  items-center gap-10 justify-center">
        <header className="2xl:text-7xl justify-end sm:px-0 sm:text-5xl px-4 text-3xl sm:mb-20 mb-10 flex flex-row gap-2 font-radley  text-gold items-center">
          <span>Sapphire</span>
          <img src="/assets/logo.svg" className="2xl:w-20 w-12" />
          <span>Palace</span>
        </header>

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
              placeholder="John"
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
              placeholder="Doe"
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
              placeholder="john.doe@gmail.com"
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
              placeholder="777 666 333"
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
      </section>
      <section className="z-10 xl:w-3/5 w-full flex flex-col h-full gap-8 items-center justify-end">
        <section className="md:flex hidden flex-col bg-aquaCard h-auto w-9/12 p-7 rounded-xl gap-12 shadow-lg shadow-gray-600">
          <header className="text-4xl text-gold font-poppins font-medium">
            Hotel Card
          </header>
          <div className="flex md:flex-row flex-col justify-between md:items-center">
            <Image
              src="/assets/logo.svg"
              width={48}
              height={48}
              alt="logo"
              className="2xl:w-20 "
            />
            <div className="flex flex-col gap-4 text-right ">
              <span className="2xl:text-2xl text-lg font-poppins font-normal text-white">
                Type: {room.type}
              </span>
              <span className="2xl:text-2xl text-lg font-poppins font-normal text-white">
                Number: {room.number}
              </span>
            </div>
          </div>
          <div className="flex md:flex-row flex-col justify-between md:items-center items-end md:gap-0 gap-5">
            <span className="2xl:text-2xl text-lg text-white font-poppins font-normal">
              John Doe
            </span>
            <span className="2xl:text-4xl text-2xl justify-center sm:px-0  px-4   flex flex-row gap-2 font-radley  text-gold items-center">
              <span>Sapphire</span>
              <Image
                src="/assets/logo.svg"
                width={48}
                height={48}
                alt="logo"
                className="2xl:w-20 "
              />
              <span>Palace</span>
            </span>
          </div>
        </section>
        <section className="flex md:flex-row flex-col bg-aquaButton h-auto md:w-9/12 w-11/12 p-7 rounded-xl gap-16 shadow-lg shadow-gray-600">
          <div className="flex flex-col  gap-6 md:w-2/5 w-full text-white">
            <div className="bg-aquaButton flex flex-col  w-full px-6 rounded-3xl justify-center">
              <time className=" 2xl:text-2xl text-lg py-4 border-gold border-b-2 text-center">
                {new Date(checkIn).getDate() - 1}
                {new String(checkIn).slice(3, 7)}
              </time>
              <span className="2xl:text-2xl text-lg text-center py-2">
                Check-in
              </span>
            </div>
            <div className="bg-aquaButton flex flex-col  w-full px-6 rounded-3xl justify-center">
              <time className=" 2xl:text-2xl text-lg py-4 border-gold border-b-2 text-center">
                {new Date(checkOut).getDate() - 1}
                {new String(checkOut).slice(3, 7)}
              </time>
              <span className="2xl:text-2xl text-lg text-center py-2">
                Check-out
              </span>
            </div>
          </div>
          <summary className="flex flex-col text-gold font-poppins md:w-3/5 w-full gap-4">
            <header className="text-3xl mb-5 font-semibold text-center">
              Summary
            </header>
            <div className="w-full flex flex-row justify-between">
              <span className="2xl:text-2xl text-lg font-normal text-textGrey">
                Type
              </span>
              <span className="2xl:text-2xl text-lg font-normal text-white">
                {room.type}
              </span>
            </div>
            <div className="w-full flex flex-row justify-between">
              <span className="2xl:text-2xl text-lg font-normal text-textGrey">
                Number
              </span>
              <span className="2xl:text-2xl text-lg font-normal text-white">
                {room.number}
              </span>
            </div>
            <div className="w-full flex flex-row justify-between">
              <span className="2xl:text-2xl text-lg font-normal text-textGrey">
                Price per night
              </span>
              <span className="2xl:text-2xl text-lg font-normal text-white">
                {room.price}$
              </span>
            </div>
            <div className="w-full flex flex-row justify-between border-gold border-t-2 py-3">
              <span className="2xl:text-2xl text-lg font-normal text-textGrey">
                Total
              </span>
              <span className="2xl:text-2xl text-lg font-normal text-white">
                {priceTotal}$
              </span>
            </div>
          </summary>
        </section>
      </section>
    </main>
  );
};
export default Payment;
