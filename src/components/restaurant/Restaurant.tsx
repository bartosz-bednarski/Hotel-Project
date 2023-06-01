import { FC, useState } from "react";

const Restaurant = () => {
  const [image, setImage] = useState("");
  return (
    <div className="box-border  flex h-auto flex-col">
      <div className="box-border  h-screen bg-restaurant bg-cover ">
        <div className="box-border bg-black bg-opacity-20  h-screen flex flex-col text-white justify-center items-center px-10 text-center gap-40">
          <span className="xl:text-7xl  mt-0 text-5xl font-poppins font-semibold">
            Sapphire Palace’s Restaurant
          </span>
          <span className="xl:text-2xl  mt-0 text-2xl font-poppins font-medium">
            A Taste of Culinary Excellence: Indulge in Exquisite Dining at
            Sapphire Palace's Restaurant.
          </span>
        </div>
      </div>
      <div className="flex flex-col bg-whiteDirty py-20 gap-20">
        <span className="font-poppins text-3xl font-normal w-2/3 text-center mx-auto">
          A Taste of Culinary Excellence: Indulge in Exquisite Dining at
          Sapphire Palace's Restaurant.
        </span>
        <div className="flex flex-row px-20">
          <div className="box-border flex flex-col w-1/2 h-90vh mx-auto gap-8">
            <img src={image} className="h-4/6 w-auto bg-cover shadow-lg" />
            <div className="flex flex-row gap-5 mx-auto">
              <button
                onClick={() =>
                  setImage("/assets/louis-hansel-LIJujhJviMI-unsplash.jpg")
                }
                className={`block rounded-full ${
                  image === "/assets/louis-hansel-LIJujhJviMI-unsplash.jpg"
                    ? "bg-gold"
                    : "bg-grey"
                }  h-5 w-5`}
              />
              <button
                onClick={() =>
                  setImage("/assets/eaters-collective-12eHC6FxPyg-unsplash.jpg")
                }
                className={`block rounded-full ${
                  image === "/assets/eaters-collective-12eHC6FxPyg-unsplash.jpg"
                    ? "bg-gold"
                    : "bg-grey"
                }  h-5 w-5`}
              />
              <button
                onClick={() =>
                  setImage("/assets/georgia-z-JG5lgvc57qE-unsplash.jpg")
                }
                className={`block rounded-full ${
                  image === "/assets/georgia-z-JG5lgvc57qE-unsplash.jpg"
                    ? "bg-gold"
                    : "bg-grey"
                }  h-5 w-5`}
              />
              <button
                onClick={() =>
                  setImage("/assets/mgg-vitchakorn-98Xi5vMGKck-unsplash.jpg")
                }
                className={`block rounded-full ${
                  image === "/assets/mgg-vitchakorn-98Xi5vMGKck-unsplash.jpg"
                    ? "bg-gold"
                    : "bg-grey"
                }  h-5 w-5`}
              />
              <button
                onClick={() =>
                  setImage("/assets/nik-owens-40OJLYVWeeM-unsplash.jpg")
                }
                className={`block rounded-full ${
                  image === "/assets/nik-owens-40OJLYVWeeM-unsplash.jpg"
                    ? "bg-gold"
                    : "bg-grey"
                }  h-5 w-5`}
              />
            </div>
          </div>
          <div className="flex flex-col w-1/2 pl-16 gap-5 text-grey">
            <span className="font-poppins text-xl font-semibold">
              List of example dishes served by our hotel kitchen
            </span>
            <ul className="list-none flex flex-col gap-4  font-poppins text-md text-black">
              <li className="bg-lightAquaCard w-max px-5 py-1 rounded-md">
                Grilled shrimp with marinated garlic and lemon.
              </li>

              <li className="bg-lightAquaCard w-max px-5 py-1 rounded-md">
                Tagliatelle with Bolognese sauce and fresh Parmesan cheese.{" "}
              </li>
              <li className="bg-lightAquaCard w-max px-5 py-1 rounded-md">
                Grilled chicken salad with avocado and cherry tomatoes.{" "}
              </li>
              <li className="bg-lightAquaCard w-max px-5 py-1 rounded-md">
                Juicy beef steak with roasted potatoes and sautéed vegetables.{" "}
              </li>
              <li className="bg-lightAquaCard w-max px-5 py-1 rounded-md">
                Shrimp risotto with asparagus and white wine.{" "}
              </li>
              <li className="bg-lightAquaCard w-max px-5 py-1 rounded-md">
                Baked salmon with green pea puree and lemon sauce.
              </li>
              <li className="bg-lightAquaCard w-max px-5 py-1 rounded-md">
                Gnocchi with sun-dried tomatoes, arugula, and mozzarella cheese.
              </li>
              <li className="bg-lightAquaCard w-max px-5 py-1 rounded-md">
                Traditional Italian pizza with various toppings such as ham,
                mushrooms, and olives.{" "}
              </li>
              <li className="bg-lightAquaCard w-max px-5 py-1 rounded-md">
                Chocolate mousse dessert with raspberry sauce and whipped cream.{" "}
              </li>
            </ul>
            <span className="text-md font-poppins">
              Our kitchen offers a wide selection of dishes that combine
              tradition with a modern culinary approach.
            </span>
            <span className="text-md font-poppins">
              Each dish is carefully prepared using the finest ingredients to
              provide our guests with a unique culinary experience.
            </span>
          </div>
        </div>
        content
      </div>
    </div>
  );
};

export default Restaurant;
