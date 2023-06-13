import { FC, useState } from "react";
import Footer from "../footer/Footer";
import Image from "next/image";
const Restaurant = () => {
  const [image, setImage] = useState(
    "/assets/restaurant/louis-hansel-LIJujhJviMI-unsplash.jpg"
  );
  return (
    <main className="box-border flex h-auto flex-col">
      <section className="relative box-border  h-screen  ">
        <Image
          src="/assets/restaurant/louis-hansel-LIJujhJviMI-unsplash.jpg"
          fill={true}
          style={{ objectFit: "cover" }}
          alt="restaurant background image"
          priority={true}
        />
        <div className="box-border z-10 bg-black bg-opacity-20  h-screen flex flex-col text-white justify-center items-center px-10 text-center gap-40">
          <header className="z-10 lg:px-64 font-playFair xl:text-8xl sm:mt-32 text-5xl">
            Sapphire Palace’s Restaurant
          </header>
        </div>
      </section>
      <section className="flex flex-col bg-whiteDirty py-20 sm:px-20 px-5 gap-20">
        <header className="font-poppins text-3xl font-semibold md:w-2/3 w-full text-center mx-auto">
          Indulge in Exquisite Dining at Sapphire Palace&apos;s Restaurant.
        </header>
        <article className="flex 2xl:flex-row flex-col w-full 2xl:gap-0 gap-20">
          <section className="relative box-border flex flex-col 2xl:w-1/2 w-full 2xl:h-90vh h-auto mx-auto gap-8">
            <Image
              src={image}
              alt="Slider img"
              width={800}
              height={800}
              className=" bg-cover shadow-grey shadow-md"
              priority={true}
            />
            <div className="flex flex-row gap-5 mx-auto">
              <button
                onClick={() =>
                  setImage(
                    "/assets/restaurant/louis-hansel-LIJujhJviMI-unsplash.jpg"
                  )
                }
                className={`block rounded-full ${
                  image ===
                  "/assets/restaurant/louis-hansel-LIJujhJviMI-unsplash.jpg"
                    ? "bg-gold"
                    : "bg-grey"
                }  h-5 w-5`}
                role="button"
              />
              <button
                onClick={() =>
                  setImage(
                    "/assets/restaurant/eaters-collective-12eHC6FxPyg-unsplash.jpg"
                  )
                }
                className={`block rounded-full ${
                  image ===
                  "/assets/restaurant/eaters-collective-12eHC6FxPyg-unsplash.jpg"
                    ? "bg-gold"
                    : "bg-grey"
                }  h-5 w-5`}
                role="button"
              />
              <button
                onClick={() =>
                  setImage(
                    "/assets/restaurant/georgia-z-JG5lgvc57qE-unsplash.jpg"
                  )
                }
                className={`block rounded-full ${
                  image ===
                  "/assets/restaurant/georgia-z-JG5lgvc57qE-unsplash.jpg"
                    ? "bg-gold"
                    : "bg-grey"
                }  h-5 w-5`}
                role="button"
              />
              <button
                onClick={() =>
                  setImage(
                    "/assets/restaurant/mgg-vitchakorn-98Xi5vMGKck-unsplash.jpg"
                  )
                }
                className={`block rounded-full ${
                  image ===
                  "/assets/restaurant/mgg-vitchakorn-98Xi5vMGKck-unsplash.jpg"
                    ? "bg-gold"
                    : "bg-grey"
                }  h-5 w-5`}
              />
              <button
                onClick={() =>
                  setImage(
                    "/assets/restaurant/nik-owens-40OJLYVWeeM-unsplash.jpg"
                  )
                }
                className={`block rounded-full ${
                  image ===
                  "/assets/restaurant/nik-owens-40OJLYVWeeM-unsplash.jpg"
                    ? "bg-gold"
                    : "bg-grey"
                }  h-5 w-5`}
                role="button"
              />
            </div>
          </section>
          <section className="flex flex-col 2xl:w-1/2 w-full 2xl:items-start items-end md:pl-16 pl-0 gap-5 text-grey">
            <header className="font-poppins text-xl font-semibold">
              List of example dishes served by our hotel kitchen
            </header>
            <ul className="box-border list-none w-full flex flex-col gap-4 2xl:items-start items-end font-poppins text-md text-black md:pl-0 pl-16">
              <li className="bg-lightAquaCard w-fit px-5 py-1 rounded-md ">
                Grilled shrimp with marinated garlic and lemon.
              </li>

              <li className="bg-lightAquaCard w-fit px-5 py-1 rounded-md">
                Tagliatelle with Bolognese sauce and fresh Parmesan cheese.{" "}
              </li>
              <li className="bg-lightAquaCard w-fit px-5 py-1 rounded-md">
                Grilled chicken salad with avocado and cherry tomatoes.{" "}
              </li>
              <li className="bg-lightAquaCard w-fit px-5 py-1 rounded-md  ">
                Juicy beef steak with roasted potatoes and sautéed vegetables.{" "}
              </li>
              <li className="bg-lightAquaCard w-fit px-5 py-1 rounded-md">
                Shrimp risotto with asparagus and white wine.{" "}
              </li>
              <li className="bg-lightAquaCard w-fit px-5 py-1 rounded-md">
                Baked salmon with green pea puree and lemon sauce.
              </li>
              <li className="bg-lightAquaCard w-fit px-5 py-1 rounded-md">
                Gnocchi with sun-dried tomatoes, arugula, and mozzarella cheese.
              </li>
              <li className="bg-lightAquaCard w-fit px-5 py-1 rounded-md">
                Traditional Italian pizza with various toppings such as ham,
                mushrooms, and olives.{" "}
              </li>
              <li className="bg-lightAquaCard w-fit px-5 py-1 rounded-md">
                Chocolate mousse dessert with raspberry sauce and whipped cream.{" "}
              </li>
            </ul>
            <span className="text-md font-poppins 2xl:text-start sm:text-end text-center">
              Our kitchen offers a wide selection of dishes that combine
              tradition with a modern culinary approach.
            </span>
            <span className="text-md font-poppins 2xl:text-start sm:text-end text-center">
              Each dish is carefully prepared using the finest ingredients to
              provide our guests with a unique culinary experience.
            </span>
          </section>
        </article>
        <article className="flex lg:flex-row lg:h-screen items-start flex-col h-auto 2xl:px-32 px-0 relative">
          <Image
            src="/assets/restaurant/redcharlie-redcharlie1-t-7KEq9M0b0-unsplash.jpg"
            className=" lg:mt-0 mt-32 lg:mb-0 mb-10  shadow-grey shadow-md xl:ml-12"
            // lg:h-4/5 lg:w-2/5 sm:w-2/3 w-full
            width={600}
            height={600}
            alt="Head chef"
          />
          <section className="flex flex-col text-grey font-normal font-poppins lg:w-1/2 w-full gap-5 lg:pl-20 pl-0">
            <header className=" text-xl lg:static absolute top-0 left-0">
              The head chef of Sapphire Palace hotel
            </header>
            <header className="text-4xl text-gold lg:static absolute top-16 left-0">
              Giorgio Albanii
            </header>
            <span className="xl:text-2xl text-lg ">
              Our head chef is a true culinary master, whose passion and talent
              are undeniable.
              <br />
              <br />
              His creativity and skill in combining flavors make every dish a
              true work of art. He always seeks the freshest and highest quality
              ingredients to deliver our guests unforgettable culinary
              experiences.
              <br />
              <br />
              His constant exploration of culinary trends and techniques ensures
              that each meal is unique and unparalleled.
            </span>
          </section>
        </article>
        <article className="flex lg:flex-row lg:h-screen lg:items-start items-end flex-col-reverse h-auto 2xl:px-32 px-0 relative">
          <section className="flex flex-col text-grey font-normal font-poppins lg:w-1/2 w-full gap-5 lg:pl-20 pl-0">
            <header className=" text-xl lg:static absolute top-0 right-0 lg:text-start text-end">
              Culinary powerhouse of Sapphire Palace hotel
            </header>
            <header className="text-4xl text-gold lg:static absolute top-16 right-0 ">
              Chefs team
            </header>
            <span className="xl:text-2xl text-lg ">
              The team of chefs at Sapphire Palace hotel, led by our head chef,
              is a culinary powerhouse dedicated to creating exceptional dining
              experiences.
              <br />
              <br />
              Each chef brings their unique skills and expertise to the kitchen,
              resulting in a harmonious blend of flavors and exquisite
              presentations. Their passion for gastronomy is evident in every
              dish they prepare, showcasing a meticulous attention to detail and
              a commitment to culinary excellence.
              <br />
              <br />
              With their creativity and precision, our team of chefs
              consistently delivers delectable and memorable meals that satisfy
              the palates of our discerning guests.
            </span>
          </section>
          <Image
            src="/assets/restaurant/elevate-iv6yNy7oBqQ-unsplash.jpg"
            className=" lg:mt-0 mt-32 ml-5 lg:mb-0 mb-10  shadow-grey shadow-md xl:ml-12"
            width={540}
            height={500}
            alt="chefs team"
          />
        </article>
        <article className="flex lg:flex-row lg:h-screen items-start flex-col h-auto 2xl:px-32 px-0 relative">
          <Image
            src="/assets/restaurant/rumman-amin-X39jZ5OqRmk-unsplash.jpg"
            width={540}
            height={500}
            alt="waitstaff"
            className=" lg:mt-0 mt-32 lg:mb-0 mb-10   shadow-grey shadow-md xl:ml-12"
          />
          <section className="flex flex-col text-grey font-normal font-poppins lg:w-1/2 w-full gap-5 lg:pl-20 pl-0">
            <header className=" text-xl lg:static absolute top-0 left-0">
              Waitstaff of Sapphire Palace hotel{" "}
            </header>
            <header className="text-4xl text-gold lg:static absolute top-16 left-0">
              Waitstaff team
            </header>
            <span className="xl:text-2xl text-lg ">
              The waitstaff at Sapphire Palace hotel is a team of professional
              and attentive individuals dedicated to providing exceptional
              service.
              <br />
              <br />
              With their friendly and welcoming demeanor, they ensure that every
              guest feels valued and well taken care of. From recommending the
              finest dishes on our menu to promptly fulfilling guest requests,
              our waitstaff goes above and beyond to create a memorable dining
              experience.
              <br />
              <br />
              With their knowledge of food and beverage pairings, impeccable
              table service, and attention to detail, our waitstaff plays a
              crucial role in enhancing our guests&apos; overall satisfaction
              during their stay.
            </span>
          </section>
        </article>
      </section>
      <Footer />
    </main>
  );
};

export default Restaurant;
