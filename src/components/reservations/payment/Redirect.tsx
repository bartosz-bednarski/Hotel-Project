import { useRouter } from "next/router";
import { useEffect } from "react";
import Image from "next/image";
const Redirect = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 6000);
  }, []);
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen gap-10">
      <header className="sm:text-4xl text-2xl font-poppins text-grey">
        Thank You for your payment.
      </header>
      <span className="sm:text-xl text-base font-poppins text-grey">
        You will be redirected to the main page
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
  );
};
export default Redirect;
