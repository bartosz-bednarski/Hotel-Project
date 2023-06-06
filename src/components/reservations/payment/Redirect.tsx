import { useRouter } from "next/router";
import { useEffect } from "react";

const Redirect = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 6000);
  }, []);
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen gap-10">
      <header className="text-4xl font-poppins text-grey">
        Thank You for your payment.
      </header>
      <span className="text-xl font-poppins text-grey">
        You will be redirected to the main page
      </span>
      <span className="2xl:text-4xl text-2xl justify-center sm:px-0  px-4   flex flex-row gap-2 font-radley  text-gold items-center">
        <span>Sapphire</span>
        <img src="/assets/logo.svg" className="2xl:w-16 w-12" />
        <span>Palace</span>
      </span>
    </div>
  );
};
export default Redirect;
