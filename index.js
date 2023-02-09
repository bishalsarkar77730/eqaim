import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
dotenv.config();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/api", (req, res) => {
  const num1 = req.body.numberfirst;
  const num2 = req.body.numbersecond;
  const countCarries = (num1 = 1, num2 = 1) => {
    let result = [];
    let total = [];
    let sums = 0;
    let carry = 0;
    // Convert the numbers to strings and pad with zeros if necessary
    num1 = num1
      .toString()
      .padStart(Math.max(num1.toString().length, num2.toString().length), "0");
    num2 = num2
      .toString()
      .padStart(Math.max(num1.toString().length, num2.toString().length), "0");
    // Loop through the digits of the numbers from right to left
    for (let i = num1.length - 1; i >= 0; i--) {
      let sum = parseInt(num1[i]) + parseInt(num2[i]) + carry;
      if (sum >= 10) {
        carry = 1;
        result.unshift(carry);
        sums = sum.toString().substring(1);
        total.unshift(sums);
      } else {
        carry = 0;
        result.unshift(carry);
        sums = sum.toString();
        total.unshift(sums);
      }
    }
    // If there's a carry left after the loop, add it to the Total
    if (carry > 0) {
      total.unshift(carry);
    }

    return { result, total };
  };
  res.status(200).send(countCarries(num1, num2));
});

app.listen(process.env.LOCAL_HOST_PORT, () => {
  console.log(
    `server is running on http://localhost:${process.env.LOCAL_HOST_PORT}`
  );
});
