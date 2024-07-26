import React from "react";
import Slot from "./Slot";
import Spinner from "./components/Spinner";

const Day = ({ date, slots, loading }) => {
  const formattedDate = date.toLocaleDateString("fr-FR", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  const splitDate = formattedDate.split(" ");
  const weekday = splitDate[0];
  const day = splitDate[1];
  const month = splitDate[2];

  return (
    <div className="day" >
      {weekday}
      <div>
        <div>
          {day} {month}
        </div>
        {loading ? (
          <Spinner />
        ) : (
          slots.map((slot, i) => <Slot key={i} slots={slot} />)
        )}
      </div>
    </div>
  );
};

export default Day;
