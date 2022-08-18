import React from "react";

import ShowItem from "../UI/show/ShowItem";

const OlderShows = (props) => {
  return (
    <React.Fragment>
      <section>
        <h2 className="title">Older Shows</h2>
        <ShowItem />
      </section>
    </React.Fragment>
  );
};

export default OlderShows;
