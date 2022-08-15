import React from "react";
import ShowItem from "./ShowItem";

const SHOW_DETAILS = [
  {
    id: "m1",
    img: "https://images-na.ssl-images-amazon.com/images/I/811a2cuLuIL._RI_.jpg",
    name: "The Jamie Foxx Show",
    description:
      "This show was so funny to me as a kid! Jamie Foxx is a real funny comedian.",
    genre: "Comedy",
  },
];

const ShowInfo = () => {
  const showList = SHOW_DETAILS.map((show) => (
    <ShowItem
      key={show.id}
      id={show.id}
      img={show.img}
      name={show.name}
      description={show.description}
      genre={show.price}
    />
  ));
  return <ShowItem>{showList}</ShowItem>;
};

export default ShowInfo;
