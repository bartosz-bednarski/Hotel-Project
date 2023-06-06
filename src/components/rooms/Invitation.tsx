const Invitation = () => {
  return (
    <div className="box-border flex  h-fit my-16 ">
      <div className="box-border  h-auto pb-9  flex flex-col py-16 ">
        <div className=" xl:flex-col xl:h-auto xl:py-0 xl:px-32 md:px-12 box-border w-full flex flex-col h-auto py-9 px-0  justify-center items-center sm:gap-5 xl:gap-12 gap-20  text-white">
          <div className="flex flex-col items-center">
            <span className="md:text-7xl justify-center  sm:px-0 sm:text-5xl px-4 text-3xl sm:mb-20 mb-10 flex flex-row gap-2 font-radley  text-gold items-center">
              <span>Sapphire</span>
              <img src="/assets/logo.svg" className="2xl:w-36 w-12" />
              <span>Palace</span>
            </span>
            <span className=" sm:text-2xl text-base py-10 text-center rounded-2xl w-9/12 font-poppins px-12   bg-aquaButton">
              We invite you to check out our room selection, which includes
              single, double, triple rooms and suites. To make a reservation,
              simply select your preferred room from our chart available on the
              right-hand side. Below are the descriptions of each of our rooms,
              designed with the utmost comfort and relaxation in mind for our
              guests. Don&apos;t wait, book your dream stay at Sapphire Palace
              today!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Invitation;
