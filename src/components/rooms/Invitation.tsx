import Image from "next/image";
const Invitation = () => {
  return (
    <section className="box-border flex flex-col items-center py-10 text-white ">
      <header className="md:text-7xl justify-center  sm:px-0 sm:text-5xl px-4 text-3xl sm:mb-20 mb-10 flex flex-row gap-2 font-radley  text-gold items-center">
        <span>Sapphire</span>
        <Image
          src="/assets/logo.svg"
          className="2xl:w-36 2xl:h-36"
          alt="logo"
          width={48}
          height={48}
        />
        <span>Palace</span>
      </header>
      <span className=" sm:text-2xl text-base py-10 text-center rounded-2xl w-9/12 font-poppins px-12   bg-aquaButton">
        We invite you to check out our room selection, which includes single,
        double, triple rooms and suites. To make a reservation, simply select
        your preferred room from our chart available on the right-hand side.
        Below are the descriptions of each of our rooms, designed with the
        utmost comfort and relaxation in mind for our guests. Don&apos;t wait,
        book your dream stay at Sapphire Palace today!
      </span>
    </section>
  );
};
export default Invitation;
