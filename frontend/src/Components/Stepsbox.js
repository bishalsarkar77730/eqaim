import React from "react";
import "./Stepbox.css"
import Footer from "../Components/Footer";

const Stepsbox = (props) => {
  let sumString = props.numss.total;
  let carryString = props.numss.result;
  let steps = [];
  let sums = [];
  let carrys = [];

  const data = () => {
    for (let j = 0; j < sumString.length; j++) {
      steps.push("  step" + j);
      sums.push("  sumString : " + sumString[j]);
    }
    for (let i = 0; i < carryString.length; i++) {
      carrys.push("  carryString : " + carryString[i]);
    }
    return { steps, sums, carrys };
  };
  data();
  const items = [steps.reverse(), carrys, sums];
  return (
    <div className="box-body">
      <div>
        {items.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
        <h3>here is carrys = {props.numss.result}</h3>
        <h3>here is total = {props.numss.total}</h3>
      </div>
      <div className="foot">
        <Footer />
      </div>
    </div>
  );
};

export default Stepsbox;
