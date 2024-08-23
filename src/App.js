import React, { useReducer } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import HomepageSpecials from "./components/HomepageSpecials";
import Chicago from "./components/Chicago";
import BookingPage from "./components/BookingPage";
import "./App.css";

const initializeTimes = () => {
  return ["12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM"];
};

const updateTimes = (state, action) => {
  switch (action.type) {
    case "update":
      return initializeTimes(); // For simplicity, using static times for now.
    default:
      return state;
  }
};

function App() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <div className="App">
      <Nav />
      <Hero />
      <HomepageSpecials />
      <Chicago />
      <BookingPage availableTimes={availableTimes} dispatch={dispatch} />
    </div>
  );
}

export default App;
