import React from "react";
import { calculateInvestmentResults, formatter } from "../util/investment";

const Table = ({ inputData }) => {
  console.log(inputData);
  const resultData = calculateInvestmentResults(inputData);

  console.log(resultData);

  // Example data to be replaced with actual calculated data
  //   console.log(resultData);

  return (
    <>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {resultData.map((row, i) => {
            const initialInvestment =
              resultData[0].valueEndOfYear -
              resultData[0].interest -
              resultData[0].annualInvestment;
            const totalInterest =
              row.valueEndOfYear -
              row.annualInvestment * row.year -
              initialInvestment;
            //   console.log(totalInterest);
              const totalAmountInvested = row.valueEndOfYear - totalInterest;
            return (
              <tr key={i}>
                <td>{row.year}</td>
                <td>{formatter.format(row.valueEndOfYear)}</td>
                <td>{formatter.format(row.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalAmountInvested)}</td>
              </tr>
            );
          })}
          {/* <tr>
                <td>$1000</td>
                <td>10 years</td>
                <td>5%</td>
                <td>$1628.89</td>
            </tr>
            <tr>
                <td>$2000</td>
                <td>5 years</td>
                <td>3%</td>
                <td>$2318.55</td>
            </tr>
            <tr>
                <td>$5000</td>
                <td>15 years</td>
                <td>7%</td>
                <td>$19685.71</td>
            </tr> */}
        </tbody>
      </table>
    </>
  );
};

export default Table;
