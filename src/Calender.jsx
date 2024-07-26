import { useEffect, useState } from "react";
import Day from "./Day";
import { useFormDate } from "./hooks/useFormDate";
import axios from "axios";
import Spinner from "./components/Spinner";

const AddDays = (date, days) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

export const Calender = () => {
  const [startDate, setstartDate] = useState(new Date());
  const [slots, setSlots] = useState([]);
  const [loading, setLoading] = useState(true);

  const endDate = AddDays(new Date(startDate), 6);

  const formattedStartDate = useFormDate(startDate);
  const formattedEndDate = useFormDate(endDate);

  useEffect(() => {
    fetchSolts();
  }, [startDate]);

  const fetchSolts = () => {
    setLoading(true);

    axios
      .post(
        "https://ikalas.com/api/v1/ik-slots",
        {
          startDate: formattedStartDate,
          endDate: formattedEndDate,
        },
        {
          headers: { apikey: "IK-HJQT0XWDYA2I2B000NVD" },
        }
      )
      .then((response) => {
        setSlots(
          response.data.result.reduce((acc, slot) => {
            const date = slot.start.split("T")[0];
            if (!acc[date]) acc[date] = [];
            acc[date].push(slot);
            return acc;
          }, {})
        );
      })
      .catch((error) => {
        console.error("Error fetching slots:", error);
      }).finally(() => {
        setLoading(false);

      });
  };

  const nextWeek = () => {
    setstartDate((prev) => AddDays(prev, 7));
  };
  const prevWeek = () => {
    setstartDate((prev) => AddDays(prev, -7));
  };

  const renderDays = () => {
    const days = [];
    for (let i = 0; i < 7; i++) {
      const day = AddDays(startDate, i);
      days.push(
        <Day
          key={i}
          date={day}
          slots={slots[day.toISOString().split("T")[0]] || []}
          loading={loading}
        />
      );
    }
    return days;
  };

  const disabledButton = useFormDate(new Date()) === useFormDate(startDate)
  return (
    <div className="days">
      <button
      className={`${disabledButton ? "no-hover" : "hover"}`}
        onClick={prevWeek}
        disabled={disabledButton}
      >
        ◀
      </button>
      {renderDays()}
      <button onClick={nextWeek} className="hover">
        ▶
      </button>
    </div>
  );
};
