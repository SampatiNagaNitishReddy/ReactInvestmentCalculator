export default function Calculator({ investment, onChange }) {
 
  
    return (
      <div id="user-input">
        <div className="input-group">
          <div>
            <label>INITIAL INVESTMENT</label>
            <input
              type="number"
              onChange={(e) => onChange("InitialInvestment", e.target.value)}
              value={investment.InitialInvestment} required
            />
          </div>
          <div>
            <label>ANNUAL INVESTMENT</label>
            <input
              type="number"
              onChange={(e) => onChange("AnnualInvestment", e.target.value)}
              value={investment.AnnualInvestment} required
            />
          </div>
        </div>
        <div className="input-group">
          <div>
            <label>EXPECTED RETURN</label>
            <input
              type="number"
              onChange={(e) => onChange("ExpectedReturn", e.target.value)}
              value={investment.ExpectedReturn} required
            />
          </div>
          <div>
            <label>DURATION</label>
            <input
              type="number"
              onChange={(e) => onChange("Duration", e.target.value)}
              value={investment.Duration} required
            />
          </div>
        </div>
      </div>
    );
  }
  