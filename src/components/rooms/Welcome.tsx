const Welcome = () => {
  return (
    <div className="box-border flex  bg-hero-rooms h-auto ">
      <div className="box-border bg-black bg-opacity-20  h-auto flex flex-col ">
        <div className="box-border flex flex-col  h-screen pt-40 justify-center items-center gap-12 sm:px-32 px-12 text-white pb-36">
          <span className="lg:px-64 font-roboto sm:text-4xl text-2xl italic ">
            Rooms & Suites
          </span>
          <span className="font-playFair sm:text-5xl text-2xl font-semibold text-center">
            Relax in Italian style and enjoy the beautiful views of the
            Mediterranean Sea from our luxurious hotel rooms just a few steps
            from the sandy beach.
          </span>
        </div>
      </div>
    </div>
  );
};
export default Welcome;
