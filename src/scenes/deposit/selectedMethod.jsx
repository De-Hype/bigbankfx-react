import { useTheme } from "@mui/material";
import { tokens } from "../../theme";

let boxData;
let boxColor;

function SelectedMethod(prop) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  if (prop.selectedMethod == "card") {
    boxData = {
      plan: "Basic",
      bonus: "10%",
      investmentPeriod: "10 days",
      dailyProfit: "3.0%",
      totalProfit: "30.0%",
      investmentLimit: "$50 - $10,000",
    };

    boxColor = {
      background: colors.blueAccent[900],
      border: "1px solid rgba(0,0,255,0.5)",
    };
  } else if (prop.selectedMethod == "crypto") {
    boxData = {
      plan: "Silver",
      bonus: "15%",
      investmentPeriod: "10 days",
      dailyProfit: "5.0%",
      totalProfit: "50.0%",
      investmentLimit: "$10,000 - $100,000",
    };

    boxColor = {
      background: colors.greenAccent[900],
      border: "1px solid green",
    };
  } else if (prop.selectedMethod == "gold") {
    boxData = {
      plan: "Gold",
      bonus: "20%",
      investmentPeriod: "10 days",
      dailyProfit: "6.0%",
      totalProfit: "60.0%",
      investmentLimit: "$100,000 - $100,000,000",
    };

    boxColor = {
      background: colors.grey[900],
      border: "1px solid grey",
    };
  }

  const btnColor = {
    background: colors.greenAccent[400],
    color: colors.primary[900],
  };

  return (
    <div className="selected-method">
      <div className="selected-top">
        <h1>Payment Plan</h1>
        <div className="selected-box" style={boxColor}>
          <h1>{boxData.plan} plan</h1>
          <div className="split-box">
            <div className="split-selected">
              <p>Referal bonus</p>
              <h3>{boxData.bonus}</h3>
            </div>
            <div className="split-selected">
              <p>Investment period</p>
              <h3>{boxData.investmentPeriod}</h3>
            </div>
            <div className="split-selected">
              <p>Daily profit</p>
              <h3>{boxData.dailyProfit}</h3>
            </div>
            <div className="split-selected">
              <p>Total profit</p>
              <h3>{boxData.totalProfit}</h3>
            </div>
            <div className="split-selected">
              <p>payment currency</p>
              <h3>BTC/NR/USD</h3>
            </div>
            <div className="split-selected">
              <p>Investment limit</p>
              <h3>{boxData.investmentLimit}</h3>
            </div>
          </div>
        </div>
        <p style={{
            marginTop:"1.2rem",
            textAlign:"center"
        }} className="">
          Please make payment to this address, note this address was generated
          for this transaction only:
          <b> bc1qrz9xtzy38ekfhhnfmecpnc5wx6xq9797y8hsuc</b>
        </p>
        <button style={btnColor}>Proceed to checkout</button>
      </div>
    </div>
  );
}

export default SelectedMethod;
