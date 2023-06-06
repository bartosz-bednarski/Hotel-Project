const Footer = () => {
  return (
    <div className="box-border h-auto w-full bg-aquaCard sm:px-32 px-8 py-12 flex flex-col gap-16 ">
      <span className="2xl:text-5xl  sm:text-5xl   text-3xl  flex flex-row gap-2 font-radley  text-gold items-center mx-auto">
        <span>Sapphire</span>
        <img src="/assets/logo.svg" className="2xl:w-24 w-12" />
        <span>Palace</span>
      </span>
      <div className="flex flex-wrap gap-10 font-poppins text-white  justify-between items-center">
        <div className="flex flex-col gap-6">
          <span className="font-semibold sm:text-2xl text-xl ">
            Phone & Mail
          </span>
          <span className="flex flex-row font-normal sm:text-lg text-base items-center h-7">
            <img
              src="/assets/footer/phone-regular-204.png"
              className="w-8 h-8 mr-5"
            />
            777 666 555
          </span>
          <span className="flex flex-row font-normal sm:text-lg text-base items-center h-7">
            <img
              src="/assets/footer/gmail-logo-204.png"
              className="w-8 h-8 mr-5"
            />
            saphire.palace@gmail.com
          </span>
        </div>
        <div className="flex flex-col gap-6">
          <span className="font-semibold sm:text-2xl text-xl">Reach us</span>
          <span className="flex flex-row font-normal sm:text-lg text-base items-center h-7">
            <img
              src="/assets/footer/location-plus-solid-120.png"
              className="w-8 h-8 mr-5"
            />
            84131 Salerno SA, Italy{" "}
          </span>
          <span className="flex flex-row w font-normal sm:text-lg text-base items-center h-7">
            <img
              src="/assets/footer/location-plus-solid-120.png"
              className="w-8 h-8 mr-5"
            />
            Via Leucosia{" "}
          </span>
        </div>
        <div className="flex flex-col gap-6">
          <span className="font-semibold sm:text-2xl text-xl">
            Check-in hours
          </span>
          <span className="flex flex-row font-normal sm:text-lg text-base items-center h-7">
            <img
              src="/assets/footer/calendar-solid-120.png"
              className="w-8 h-8 mr-5"
            />
            Mon-Fri: 09:00 - 22:00
          </span>
          <span className="flex flex-row w font-normal sm:text-lg text-base items-center h-7">
            <img
              src="/assets/footer/calendar-solid-120.png"
              className="w-8 h-8 mr-5"
            />
            Sat-Sun: 08:00 - 21:00
          </span>
        </div>
        <div className="flex flex-row gap-16">
          <img
            src="/assets/footer/instagram-logo-204.png"
            className="xl:w-12 xl:h-12 h-8 w-8"
          />
          <img
            src="/assets/footer/facebook-circle-logo-204.png"
            className="xl:w-12 xl:h-12 h-8 w-8"
          />
          <img
            src="/assets/footer/twitter-logo-204.png"
            className="xl:w-12 xl:h-12 h-8 w-8"
          />
        </div>
      </div>
    </div>
  );
};
export default Footer;
