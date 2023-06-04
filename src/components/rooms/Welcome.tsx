const Welcome = () => {
  const user = process.env.DB_USER;
  console.log(user);
  return (
    <div className="box-border flex  bg-hero-rooms h-auto bg-cover">
      <div className="box-border bg-black bg-opacity-20 w-full  h-auto flex flex-col ">
        <div className="box-border flex flex-col  h-screen pt-40 justify-center items-center gap-12 sm:px-32 px-12 text-white pb-36">
          <span className="lg:px-64 font-playFair xl:text-8xl sm:mt-32 text-5xl ">
            Sapphire Palace’s Rooms
          </span>
          <span className="font-poppins xl:text-2xl sm:text-lg text-sm font-medium  text-center">
            Relax in Italian style and enjoy the beautiful views of the
            Mediterranean Sea
            <br /> from our luxurious hotel rooms just a few steps from the
            sandy beach.
          </span>
        </div>
      </div>
    </div>
  );
};
export default Welcome;
