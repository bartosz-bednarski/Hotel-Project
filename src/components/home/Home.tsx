import { useEffect, useState } from "react";

const HOME_HERO = [
  {
    header: "The Sapphire Palace",
    text: "Welcome to Sapphire Palace an exclusive hotel where every detail has been designed with your comfort and relaxation in mind.",
    background: "bg-hero-main",
  },
  {
    header: "Sapphire Palace’s cuisine",
    text: "Sapphire Palace's cuisine is a true paradise for the taste buds. Our team of chefs serves exquisite dishes made from the best ingredients, combining traditional flavors with modern culinary techniques.",
    background: "bg-hero-cuisine",
  },
  {
    header: "The Sapphire Palace",
    text: "The rooms at Sapphire Palace are the epitome of luxury and elegance. Each one has been designed with the aim of providing maximum comfort and relaxation for our guests. They are equipped with the highest quality furniture and appliances and offer stunning views of the surrounding area.",
    background: "bg-hero-rooms",
  },
  {
    header: "The Sapphire Palace",
    text: "Sapphire Palace is located in a beautiful area by the Mediterranean Sea, in a place full of Italian climate. Our beach, just a few steps from the hotel, offers excellent conditions for relaxation and water sports. Guests can also enjoy stunning views of the surroundings, picturesque coves, and turquoise waters of the Mediterranean Sea.",
    background: "bg-hero-beach",
  },
];
const Home = () => {
  const [currentHero, setCurrentHero] = useState(0);
  const backButtonHandler = () => {
    currentHero === 0
      ? setCurrentHero(3)
      : setCurrentHero((item) => (item = item - 1));
  };
  const forwardButtonHandler = () => {
    currentHero === 3
      ? setCurrentHero(0)
      : setCurrentHero((item) => (item = item + 1));
  };
  useEffect(() => {
    let i = 0;

    const setValues = () => {
      if (currentHero === 3) {
        setCurrentHero(0);
      } else {
        setCurrentHero((item) => (item = item + 1));
      }
    };
    const interval = setInterval(setValues, 10000);
    return () => clearInterval(interval);
  }, [currentHero]);
  return (
    <div className="box-border flex flex-col w-auto bg-black ">
      {/* <img
        src="/assets/elba-gd3fdbbea6_1920.jpg"
        className="h-screen w-screen z-10 absolute top-0"
      /> */}
      <div
        className={`flex w-auto h-screen z-20 ${HOME_HERO[currentHero].background} bg-cover animate-slider relative`}
        key={currentHero}
      >
        <div className="bg-black bg-opacity-20 w-screen h-screen">
          <div className="xl:mt-20vh sm:mt-32 mt-40 text-white flex flex-col w-auto items-center text-center font-poppins">
            <span className="xl:text-8xl sm:mt-32 mt-0 text-5xl font-playFair">
              {HOME_HERO[currentHero].header}
            </span>
            <span className="xl:text-2xl xl:w-818px sm:text-lg sm:mt-16 mt-5 w-auto mx-10 leading-9  text-sm font-medium text-center">
              {HOME_HERO[currentHero].text}
            </span>
            <button className="sm:text-2xl px-12 py-2 my-8 flex justify-center items-center bg-aquaButton text-lg rounded-3xl absolute bottom-28">
              Book Now
            </button>
            <span className="flex flex-row gap-20 absolute bottom-20 ">
              <button onClick={backButtonHandler}>
                <img src="/assets/arrow-left.svg" className="sm:w-auto w-10" />
              </button>
              <button className="rotate-180" onClick={forwardButtonHandler}>
                <img src="/assets/arrow-left.svg" className="sm:w-auto w-10" />
              </button>
            </span>
            <div className="flex flex-row gap-3 mt-6 absolute bottom-6">
              <span
                className={`block w-5 ${
                  currentHero === 0 ? "bg-gold" : "bg-aquaCard h-5"
                }  rounded-full`}
              />
              <span
                className={`block w-5 ${
                  currentHero === 1 ? "bg-gold" : "bg-aquaCard h-5"
                }  h-5 rounded-full`}
              />
              <span
                className={`block w-5 ${
                  currentHero === 2 ? "bg-gold" : "bg-aquaCard h-5"
                }  h-5 rounded-full`}
              />
              <span
                className={`block w-5 ${
                  currentHero === 3 ? "bg-gold" : "bg-aquaCard h-5"
                }  h-5 rounded-full`}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="md:px-36 sm:px-16 box-border bg-white h-auto flex flex-col items-center gap-16 py-16 px-0">
        <span className="font-playFair text-gold text-6xl">About us</span>
        <div className="2xl:flex-row 2xl:max-w-none 2xl:gap-16 sm:rounded-r-3xl rounded-b-3xl max-w-4xl bg-lightAquaCard  flex flex-col ">
          <img
            src="/assets/lobby-g165055a51_1920.jpg"
            className="2xl:h-96 w-auto h-auto object-fill"
          />
          <p className="desktop:text-xl flex items-center justify-center text-base text-center desktop:leading-9 leading-7 w-auto p-8">
            At Sapphire Palace, we believe that true luxury is more than just
            beautiful interiors and high-quality services. That's why we strive
            to provide our guests with a unique atmosphere that will make them
            feel at home while being able to relax and unwind in style.
            <br /> Our history dates back to the early 20th century when Emilio
            Rizzo, an Italian immigrant and lover of beauty, built Sapphire
            Palace with the aim of creating an exclusive hotel on the
            Mediterranean coast. Since then, the hotel has become a symbol of
            luxury and good taste, attracting rich and influential people from
            all over the world.
          </p>
        </div>
        <div className="2xl:flex-row 2xl:max-w-none 2xl:gap-16 sm:rounded-r-3xl rounded-b-3xl max-w-4xl bg-lightAquaCard flex flex-col-reverse ">
          <p className=" flex items-center justify-center text-base desktop:text-xl  text-center desktop:leading-9 leading-6 w-auto p-8">
            Today, after years of neglect, Sapphire Palace returns as one of the
            most prestigious holiday destinations. By renovating the hotel, we
            have preserved its original character while adapting it to the needs
            of our guests. Our interiors have been designed to provide maximum
            comfort and convenience while maintaining the original classical
            style. At Sapphire Palace, we take care of every detail, starting
            from our restaurant serving exquisite dishes made from the best
            ingredients to our spa offering a wide range of relaxation and
            beauty treatments. Our staff consists of qualified and experienced
            professionals who are always available to assist our guests.
          </p>
          <img
            src="/assets/receptionists-g90e503aff_1920.jpg"
            className="2xl:h-96 w-auto h-auto object-fill"
          />
        </div>
        <span className="2xl:w-2/5 2xl:mt-24 sm:px-0 sm:text-2xl px-4 text-grey font-roboto text-lg leading-10 mt-0  w-auto text-center italic">
          If you're looking for a place where you will feel special and relax in
          a beautiful and romantic setting, Sapphire Palace is the perfect place
          for you. We invite you to our hotel, and we guarantee that your stay
          will be an unforgettable experience.
        </span>
        <span className="2xl:text-7xl sm:px-0 sm:text-5xl sm:mt-20 px-4 text-3xl mt-4 flex flex-row gap-2 font-radley  text-gold items-center">
          <span>Sapphire</span>
          <img src="/assets/logo.svg" className="2xl:w-36 w-12" />
          <span>Palace</span>
        </span>
      </div>
    </div>
  );
};
export default Home;
