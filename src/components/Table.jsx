import React from 'react'
import { calculateInvestmentResults } from '../util/investment';

const Table = ({inputData}) => {
console.log(inputData);
const resultData = calculateInvestmentResults(inputData);
  // Example data to be replaced with actual calculated data
     console.log(resultData);
      
  return (
    <>
    <table id='result'>
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
            {
                resultData.map((row, i)=> <tr key={i}>
                    <td>{row.year}</td>
                    <td>{row.valueEndOfYear}</td>
                    <td>{row.interest}</td>
                    <td>{row.annualInvestment}</td>
                </tr>)
            }
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
  )
}

export default Table