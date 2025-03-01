import { useState } from "react"
import Calculator from "./Calculator"
import Header from "./Header"
import Result from "./Result"

function App() {
  const[InvestmentData,setInvestmentData]=useState({
    InitialInvestment:10000,
    AnnualInvestment:5000,
    ExpectedReturn:7,
    Duration:5
  })
  const inputisvalid = InvestmentData.Duration >= 1;
  const handleChange = (key, value) => {
    setInvestmentData((prev) => ({
      ...prev,
      [key]: +value,
    }));
  };
  return (
    <div>
        <Header/>
        <Calculator investment={InvestmentData} onChange={handleChange}/>
        {!inputisvalid && (<p className="center">Please enter a duration greater than zero</p>)}
        {inputisvalid && <Result investment={InvestmentData}/>}
    </div>

  )
}

export default App
