import { calculateInvestmentResults } from '../util/investment.js'
import { formatter } from '../util/investment.js';
export default function Result({investment}){
    console.log("InvestmentData in Result:", investment); // Debugging
    const annualData = calculateInvestmentResults({
        initialInvestment: investment?.InitialInvestment ?? 0,
        annualInvestment: investment?.AnnualInvestment ?? 0,
        expectedReturn: investment?.ExpectedReturn ?? 0,
        duration: investment?.Duration ?? 0,
      });
    return(
        <table id="result">
            <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Intrest (Year)</th>
                <th>Total Intrest</th>
                <th>Invested Capital</th>
            </tr>
            </thead>
            <tbody>
               {
                 (annualData.map((data)=>(
                    <tr key={data.year}>
                        <td>{data.year}</td>
                        <td>{formatter.format(data.valueEndOfYear)}</td>
                        <td>{formatter.format(data.interest)}</td>
                        <td>{formatter.format(data.totalInterest)}</td>
                        <td>{formatter.format(data.annualInvestment)}</td>
                    </tr>
                )))
               }
            </tbody>
        </table>
    )
        
}