import Header from "../../dashcomponent/Header"
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";

function PaymentMethod(props) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const btnStyle = {
        background: colors.greenAccent[400],
        color: colors.primary[900],
    }

    const inputStyle = {
        background: colors.primary[400],
        color: colors.greenAccent[100],
    }
    const methodStyle = {
        width: "100%",
        padding: "30px 30px",
        background: props.selectedMethod === "card" ? colors.blueAccent[900] : colors.primary[400],
        border: props.selectedMethod === "card" ? "1px solid rgba(0,0,255,0.5)" : "none",
    }

    const crypto = {
        width: "100%",
        padding: "30px 30px",
        background: props.selectedMethod === "crypto" ? colors.greenAccent[900] : colors.primary[400],
        border: props.selectedMethod === "crypto" ? "1px solid green" : "none",
    }

    const gold = {
        width: "100%",
        padding: "30px 30px",
        background: props.selectedMethod === "gold" ? colors.grey[900] : colors.primary[400],
        border: props.selectedMethod === "gold" ? "1px solid grey" : "none",
    }


    return (
        <div className="payment-method">
            <Header title="Deposit" subtitle="make your deposit" />
            <div className="enter-amount">
                <h3>Enter amount you want to deposit</h3>
                <input type="text" placeholder="$0" style={inputStyle} />
            </div>
            <div className="deposit-quick-option">
                <div className="deposit-q-box" style={inputStyle}>$50</div>
                <div className="deposit-q-box" style={inputStyle}>$100</div>
                <div className="deposit-q-box" style={inputStyle}>$200</div>
                <div className="deposit-q-box" style={inputStyle}>$500</div>
            </div>
            <div className="payment-option">
                <h3>Choose your payment plan</h3>
                <div className="method-box" style={methodStyle} id="card" onClick={props.selectMethod}>
                    <div className="m-b-left" id="card" onClick={props.selectMethod}>
                        <p id="card" onClick={props.selectMethod}>Basic Plan</p>
                        <div className="card-container" id="card" onClick={props.selectMethod}>
                            <div className="card-box" id="card" onClick={props.selectMethod}></div>
                            <h4>10% profit on capital</h4>
                            
                        </div>
                    </div>
                    <div className="m-b-right" id="card" onClick={props.selectMethod}>
                        <img src="https://s3-eu-west-1.amazonaws.com/sage-cakehr/recruitment/group_informations/logos/000/000/835/original/paybis_logo.png?1619178850" id="card" onClick={props.selectMethod} />
                    </div>
                </div>
                <div className="method-box" onClick={props.selectMethod} style={crypto} id="crypto">
                    <div className="m-b-left" id="crypto" Click={props.selectMethod}>
                        <p id="crypto" Click={props.selectMethod}>Silver Plan</p>
                        <div className="card-container" id="crypto" Click={props.selectMethod}>
                            <div className="card-box" id="crypto" Click={props.selectMethod}></div>
                            <h4>10% profit on capital</h4>
                        </div>
                    </div>
                    <div className="m-b-right" id="crypto" Click={props.selectMethod}>
                        <img src="https://s3-eu-west-1.amazonaws.com/sage-cakehr/recruitment/group_informations/logos/000/000/835/original/paybis_logo.png?1619178850" id="crypto" Click={props.selectMethod} />
                    </div>
                </div>
                <div className="method-box" onClick={props.selectMethod} style={gold} id="gold">
                    <div className="m-b-left" id="gold" Click={props.selectMethod}>
                        <p id="gold" Click={props.selectMethod}>Silver Plan</p>
                        <div className="card-container" id="gold" Click={props.selectMethod}>
                            <div className="card-box" id="gold" Click={props.selectMethod}></div>
                            <h3>20% profit on capital</h3>
                        </div>
                    </div>
                    <div className="m-b-right" id="gold" Click={props.selectMethod}>
                        <img src="https://s3-eu-west-1.amazonaws.com/sage-cakehr/recruitment/group_informations/logos/000/000/835/original/paybis_logo.png?1619178850" id="crypto" Click={props.selectMethod} />
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default PaymentMethod;