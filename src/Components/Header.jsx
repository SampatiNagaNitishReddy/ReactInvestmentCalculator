import investmentcalculatorlogo from  '../assets/investment-calculator-logo.png';
export default function Header(){
    return(
    <div id="header">
        <img src={investmentcalculatorlogo} alt=""/>
         <h1>React Investment Calculator</h1>
    </div>);
}