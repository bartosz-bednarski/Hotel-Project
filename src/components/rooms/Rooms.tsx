import { FC } from "react";
import Reservations from "../reservations/Reservations";
import Room from "./Room";
import Welcome from "./Welcome";
import Invitation from "./Invitation";
import Footer from "../footer/Footer";
const ROOMS_OFERT = [
  {
    img: "/assets/bedroom-g57f6bfa9e_1920.jpg",
    title: "Single room",
    text: "The single room at Sapphire Palace is the perfect place for solo travelers. It has been equipped with all necessary amenities to provide maximum comfort and relaxation to our guests. The room features a comfortable bed, air conditioning, and a flat-screen TV with satellite channels. Additionally, the room is equipped with a desk and chair, making it ideal for work or study in comfortable conditions. The room also offers free Wi-Fi access, perfect for those who need to work or stay connected with the world. The bathroom with a shower and complimentary toiletries provides our guests with comfortable conditions for personal hygiene. The room also includes towels and a hairdryer. Beautiful views of the surrounding area can be seen from the room's windows.",
    sentence:
      "All of this makes the single room at Sapphire Palace the perfect place for those who value peace, privacy, and comfort during their stay in the hotel.",
    price: "Price 50$ per night",
  },
  {
    img: "/assets/hotel-room-g39ed91d20_1920.jpg",
    title: "Double room",
    text: "The room for a couple at Sapphire Palace is the perfect place for a romantic getaway for two. The room has been carefully designed to provide our guests with maximum comfort and relaxation. The room features a large and comfortable queen-size bed, air conditioning, a flat-screen TV with access to satellite channels. Additionally, the room is equipped with a desk and chair, which allows for work or study in comfortable conditions. The bathroom has a shower and a complimentary toiletries set, providing our guests with comfortable conditions for personal hygiene. Towels and a hairdryer are also provided in the room. ",
    sentence:
      "The room for a couple at Sapphire Palace is the perfect place for couples who want to spend unforgettable moments in the beautiful scenery of the Mediterranean Sea.",
    price: "Price 80$ per night",
  },
  {
    img: "/assets/bedroom-g12e25ce3a_1920.jpg",
    title: "Apartment",
    text: "The apartment in Sapphire Palace is an ideal option for guests who are looking for spacious and luxurious accommodation. The apartment is fully equipped with all necessary amenities, including air conditioning, a flat-screen TV with satellite channels, and a desk with a chair. The apartment also has a large bathroom with a shower, a hairdryer, and a complimentary set of toiletries. It is the perfect place to stay for families or a group of friends, as the apartment offers ample space and comfortable beds for every guest. Additionally, the apartment has a large balcony with beautiful views of the Mediterranean Sea, which is an ideal place to relax and admire the surroundings.",
    sentence:
      "Book an apartment in Sapphire Palace and enjoy an unforgettable stay in comfortable and luxurious conditions.",
    price: "Price 120$ per night",
  },
  {
    img: "/assets/pexels-max-rahubovskiy-7546724.jpg",
    title: "King Room",
    text: "A room with a king-size bed and a sea view at Sapphire Palace is an excellent choice for those seeking to combine luxury and stunning views. Equipped with high-quality furnishings and elegantly styled, this room offers not only a comfortable sleep but also unforgettable visual experiences. From the large and cozy king-size bed, you can indulge in spectacular views of the azure waters of the Mediterranean Sea without even leaving the room. Additionally, the room is equipped with all necessary amenities, such as air conditioning, a flat-screen TV, and satellite channels, to ensure your comfort and entertainment. By spending time in this room, you'll merge relaxation with an incredible sea view, creating unforgettable memories of your stay at Sapphire Palace.",
    sentence:
      "Discover the luxury and beauty of this room with a king-size bed and a sea view at Sapphire Palace, where you can enjoy tranquility and unforgettable views of the Mediterranean Sea. The harmony between comfort and nature awaits you in this charming room.",
    price: "Price 100$ per night",
  },
];
const Rooms: FC = () => {
  return (
    <div className="box-border h-auto w-auto flex flex-col ">
      <Welcome />
      <Invitation />
      {/* <Reservations onReservations={props.onReservations} /> */}
      {ROOMS_OFERT.map((item) => {
        return (
          <Room
            img={item.img}
            title={item.title}
            text={item.text}
            sentence={item.sentence}
            price={item.price}
          />
        );
      })}
      <Footer />
    </div>
  );
};
export default Rooms;
