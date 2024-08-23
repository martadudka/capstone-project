import React, { useState } from "react";


function BookingForm({ availableTimes, dispatch }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleDateChange = (e) => {
    setDate(e.target.value);
    dispatch({ type: "update", date: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Table booked for ${date} at ${time}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="booking-date">Select booking date:</label>
      <input
        type="date"
        id="booking-date"
        value={date}
        onChange={handleDateChange}
        required
      />

      <label htmlFor="booking-time">Available times:</label>
      <select
        id="booking-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      >
        <option value="">Select a time</option>
        {availableTimes.map((t, index) => (
          <option key={index} value={t}>
            {t}
          </option>
        ))}
      </select>

      <button type="submit">Book Now</button>
    </form>
  );
}

export default BookingForm;
