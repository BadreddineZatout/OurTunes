import React from "react";
import Tune from "./Tune";

function TunesList({ tunes }) {
  return (
    <div>
      {tunes.map((tune) => (
        <Tune tune={tune} key={tune.trackId} />
      ))}
    </div>
  );
}

export default TunesList;
