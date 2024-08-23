import React from "react";
import BookingForm from "./BookingForm";


function BookingPage({ availableTimes, dispatch }) {
  return (
    <section className="booking-page">
      <h2>Reserve a Table</h2>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </section>
  );
}

export default BookingPage;
