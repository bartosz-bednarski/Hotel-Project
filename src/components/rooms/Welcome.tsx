const Welcome = () => {
  const user = process.env.DB_USER;
  console.log(user);
  return (
    <div className="box-border flex w-full bg-hero-rooms h-screen bg-cover">
      <div className="box-border bg-black w-full bg-opacity-20 h-auto flex flex-col ">
        <div className="box-border flex flex-col w-full h-screen pt-40 justify-center items-center gap-12 sm:px-32 px-12 text-white text-center pb-36">
          <span className="lg:px-64 font-playFair xl:text-8xl sm:mt-32 text-5xl ">
            Sapphire Palace’s Rooms
          </span>
          <span className="font-poppins xl:text-2xl sm:text-lg text-sm font-medium mt-20 text-center">
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
