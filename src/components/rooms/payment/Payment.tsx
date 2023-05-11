import { FormEvent } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
interface IFormInput {
  firstName: string;
  secondName: string;
  email: string;
  phoneNumber: string;
}
const Payment = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  return (
    <div className="flex flex-col h-screen box-border py-10 pl-32 justify-center">
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
            <span className="flex flex-col w-3/4">
              <label className="text-black font-poppins text-xl font-normal py-4 w-full">
                Name
              </label>
              <input
                className="w-full bg-gray-200 text-gray-700   rounded py-3 px-4  leading-tight  focus:bg-white shadow-sm "
                placeholder="Your name"
                {...register("firstName", { required: true })}
              />
            </span>
            <span className="flex flex-col w-3/4">
              <label className="text-black font-poppins text-xl font-normal py-4">
                Surname
              </label>
              <input
                className=" w-full bg-gray-200 text-gray-700 rounded py-3 px-4  leading-tight  focus:bg-white shadow-sm "
                {...register("secondName", { required: true })}
              />
            </span>
            <span className="flex flex-col w-3/4">
              <label className="text-black font-poppins text-xl font-normal py-4">
                E-mail
              </label>
              <input
                className=" w-full bg-gray-200 text-gray-700  rounded py-3 px-4  leading-tight  focus:bg-white  shadow-sm"
                {...register("email", { required: true })}
              />
            </span>
            <span className="flex flex-col w-3/4">
              <label className="text-black font-poppins text-xl font-normal py-4">
                Phone number
              </label>
              <input
                className=" w-full bg-gray-200 text-gray-700 rounded py-3 px-4  leading-tight  focus:bg-white  shadow-sm"
                {...register("phoneNumber", { required: true })}
              />
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
                  Room type: Apartment
                </span>
                <span className="text-2xl font-poppins font-normal text-white">
                  Room number: 26
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
                  12 may
                </span>
                <span className="sm:text-2xl desktop:text-2xl xl:text-lg text-base text-center py-2">
                  Check-out
                </span>
              </div>
              <div className="bg-aquaButton flex flex-col  w-full px-6 rounded-3xl justify-center">
                <span className=" sm:text-4xl desktop:text-4xl xl:text-2xl text-xl py-4 border-gold border-b-2 text-center">
                  12 may
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
                  Apartment
                </span>
              </div>
              <div className="w-full flex flex-row justify-between">
                <span className="text-2xl font-normal text-textGrey">
                  Room Number
                </span>
                <span className="text-2xl font-normal text-white">26</span>
              </div>
              <div className="w-full flex flex-row justify-between">
                <span className="text-2xl font-normal text-textGrey">
                  Price per night
                </span>
                <span className="text-2xl font-normal text-white">100$</span>
              </div>
              <div className="w-full flex flex-row justify-between border-gold border-t-2 py-3">
                <span className="text-2xl font-normal text-textGrey">
                  Total
                </span>
                <span className="text-2xl font-normal text-white">100$</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Payment;
