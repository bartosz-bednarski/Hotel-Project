import Image from "next/image";
const Footer = () => {
  return (
    <section className="box-border h-auto w-full bg-aquaCard sm:px-32 px-8 py-12 flex flex-col gap-16 ">
      <span className="2xl:text-5xl  sm:text-5xl   text-3xl  flex flex-row gap-2 font-radley  text-gold items-center mx-auto">
        <span>Sapphire</span>
        <Image
          src="/assets/logo.svg"
          className="2xl:w-24"
          alt="logo"
          width={48}
          height={48}
        />
        <span>Palace</span>
      </span>
      <div className="flex flex-wrap gap-10 font-poppins text-white  justify-between items-center">
        <section className="flex flex-col gap-6">
          <header className="font-semibold sm:text-2xl text-xl ">
            Phone & Mail
          </header>
          <span className="flex flex-row font-normal sm:text-lg text-base items-center h-7">
            <Image
              src="/assets/footer/phone-regular-204.png"
              height={32}
              width={32}
              alt="phone"
              className="mr-5"
            />
            777 666 555
          </span>
          <span className="flex flex-row font-normal sm:text-lg text-base items-center h-7">
            <Image
              src="/assets/footer/gmail-logo-204.png"
              height={32}
              width={32}
              alt="gmail logo"
              className="mr-5"
            />
            saphire.palace@gmail.com
          </span>
        </section>
        <section className="flex flex-col gap-6">
          <header className="font-semibold sm:text-2xl text-xl">
            Reach us
          </header>
          <span className="flex flex-row font-normal sm:text-lg text-base items-center h-7">
            <Image
              src="/assets/footer/location-plus-solid-120.png"
              height={32}
              width={32}
              alt="location logo"
              className="mr-5"
            />
            84131 Salerno SA, Italy{" "}
          </span>
          <span className="flex flex-row w font-normal sm:text-lg text-base items-center h-7">
            <Image
              src="/assets/footer/location-plus-solid-120.png"
              height={32}
              width={32}
              alt="location logo"
              className="mr-5"
            />
            Via Leucosia{" "}
          </span>
        </section>
        <section className="flex flex-col gap-6">
          <header className="font-semibold sm:text-2xl text-xl">
            Check-in hours
          </header>
          <span className="flex flex-row font-normal sm:text-lg text-base items-center h-7">
            <Image
              src="/assets/footer/calendar-solid-120.png"
              height={32}
              width={32}
              alt="calendar logo"
              className="mr-5"
            />
            Mon-Fri: 09:00 - 22:00
          </span>
          <span className="flex flex-row w font-normal sm:text-lg text-base items-center h-7">
            <Image
              src="/assets/footer/calendar-solid-120.png"
              height={32}
              width={32}
              alt="calendar logo"
              className="mr-5"
            />
            Sat-Sun: 08:00 - 21:00
          </span>
        </section>
        <nav className="flex flex-row gap-16">
          <Image
            src="/assets/footer/instagram-logo-204.png"
            height={32}
            width={32}
            alt="instagram logo"
            className="xl:w-12 xl:h-12"
          />
          <Image
            src="/assets/footer/facebook-circle-logo-204.png"
            height={32}
            width={32}
            alt="facebook logo"
            className="xl:w-12 xl:h-12"
          />
          <Image
            src="/assets/footer/twitter-logo-204.png"
            height={32}
            width={32}
            alt="twitter logo"
            className="xl:w-12 xl:h-12"
          />
        </nav>
      </div>
    </section>
  );
};
export default Footer;
