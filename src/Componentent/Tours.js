import React from "react";
import SingleTour from "./SingleTour";

const Tours = ({ tours ,removeTour}) => {
  console.log(tours);
  return (
    <section>
      <div className="title">
        <h2>Ours Tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((mytour) => {
          return <SingleTour key={mytour.id} {...mytour} removeTour={removeTour}></SingleTour>;
        })}
      </div>
    </section>
  );
};

export default Tours;
