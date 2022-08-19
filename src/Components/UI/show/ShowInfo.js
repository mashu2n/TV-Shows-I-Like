import React from "react";

import Card from "../Card";
import ShowItem from "./showItem/ShowItem";

const SHOW_DETAILS = [
  {
    id: "s1",
    img: "https://images-na.ssl-images-amazon.com/images/I/811a2cuLuIL._RI_.jpg",
    name: "The Jamie Foxx Show",
    description:
      "This show was so funny to me as a kid! Jamie Foxx is a real funny comedian.",
    genre: "Comedy",
  },
  {
    id: "s2",
    img: "https://storage.googleapis.com/btvwp-uploads/2017/09/a8e1d647-livingsingle_showimage.png",
    name: "Living Single",
    description:
      "The show friends was inspired by. This show right here is that wholesome adult kind of funny.",
    genre: "Comedy",
  },
  {
    id: "s4",
    img: "https://bestsimilar.com/img/movie/thumb/01/66138.jpg",
    name: "All of Us",
    description:
      "This show had a cute kid and a hilarious dysfunctional family trying to make it all work.",
    genre: "Comedy",
  },

  {
    id: "s4",
    img: "https://m.media-amazon.com/images/M/MV5BMjM0NzVmZmItNTFmNC00ZTFkLWJhY2QtODAxNjdmMzAyMDE5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjg5NjkwODg@._V1_.jpg",
    name: "A Different World",
    description:
      "This show took me a while to actually watch it granted I was a kid when I first saw it as an adult I gave it another try and could not stop watching.It hilarious while also teaching important life lessons.",
    genre: "Comedy",
  },
];

const ShowInfo = () => {
  const showList = SHOW_DETAILS.map((show) => (
    <ShowItem
      key={show.id}
      img={show.img}
      name={show.name}
      description={show.description}
      genre={show.genre}
    />
  ));

  return (
    <section>
      <Card>
        <ul>{showList}</ul>
      </Card>
    </section>
  );
};

export default ShowInfo;
