import React, { useState } from "react";
import "./Home.css";
import axios from "axios";
import Stepsbox from "../Components/Stepsbox";

const Home = () => {
  const [active, setActive] = useState("");
  const [numss, setNumss] = useState([]);
  const [numberfirst, setNumberfirst] = useState("");
  const [numbersecond, setNumbersecond] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const positiveNumberRegex = /^[1-9][0-9]*$/;

    if (
      !positiveNumberRegex.test(numberfirst) ||
      !positiveNumberRegex.test(numbersecond)
    ) {
      alert("Invalid Input! Only positive numbers are allowed");
      return;
    }
    try {
      const res = await axios.post("/api", {
        numberfirst,
        numbersecond,
      });
      setNumss(res.data);
    } catch (error) {
      console.log(error);
    }
    setActive("stepbox");
  };
  return (
    <div className="home-main">
      <div className="form-main">
        <div className="form-inner">
          <label>First Number:</label>
          <label>Second Number:</label>
        </div>
        <div className="form-inner">
          <input
            type="text"
            placeholder="first number"
            onChange={(e) => setNumberfirst(e.target.value)}
          />
          <input
            type="text"
            placeholder="second number"
            onChange={(e) => setNumbersecond(e.target.value)}
          />
        </div>
      </div>
      <div className="butt">
        <button onClick={handleSubmit}>Genrate Steps</button>
      </div>
      <div className="boxx">
        {active === "stepbox" && <Stepsbox numss={numss} />}
      </div>
    </div>
  );
};

export default Home;
