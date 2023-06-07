const Room: React.FC<{
  img: string;
  title: string;
  text: string;
  sentence: string;
  price: string;
}> = (props) => {
  return (
    <section className="desktop:h-screen box-border flex flex-col h-auto  sm:bg-white  py-16 sm:px-16 px-0 items-center gap-14">
      <header className="font-radley sm:text-6xl text-5xl text-gold  w-full text-center py-3">
        {props.title}
      </header>

      <article className="desktop:w-full desktop:bg-transparent desktop:py-0 desktop:rounded-none flex flex-col lg:w-10/12 sm:w-11/12 w-full gap-10 rounded-3xl sm:bg-aquaCard  lg:pt-20 pt-0 pb-16 relative">
        <div className="absolute bg-aquaCard w-11/12 h-full top-12 left-36 rounded-3xl desktop:block hidden" />
        <section className="flex desktop:flex-row desktop:items-start flex-col sm:gap-0 gap-12 z-20 items-center  w-full ">
          <img
            src={props.img}
            className=" desktop:h-510px lg:w-4/5 w-full sm:rounded-3xl rounded-none"
          />
          <span className="text-center sm:pt-20 py-5 desktop:px-12  font-poppins lg:text-xl text-base sm:text-white text-grey font-normal leading-9 desktop:w-1/2 lg:w-3/4 w-full lg:px-0 px-7  ">
            {props.text}
          </span>
        </section>
        <section className="flex desktop:flex-row flex-col gap-16 desktop:items-start items-center z-20 ">
          <span className=" desktop:pl-40 sm:py-0 py-5 text-center font-roboto text-xl font-normal italic text-gold desktop:w-3/5 sm:w-3/4 w-full sm:px-0 px-5 desktop:mr-20">
            {props.sentence}
          </span>
          <span className="text-center sm:w-max w-full desktop:mr-12 desktop:ml-20 text-4xl  text-white border-y-2 border-gold py-4  sm:bg-transparent bg-aquaCard">
            {props.price}
          </span>
        </section>
      </article>
    </section>
  );
};
export default Room;
