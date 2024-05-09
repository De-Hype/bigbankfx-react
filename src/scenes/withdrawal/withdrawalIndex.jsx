import Header from "../../dashcomponent/Header";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";

function Withdrawal() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const inputStyle = {
        background: colors.primary[800],
        color: colors.greenAccent[100],
    }

    const boxStyle = {
        background: colors.primary[400],
    }
    return (
        <div className="withdraw">
            <Header title="Withdrawal" subtitle="make a withdrawal" />
            <div className="withdraw-box">
                <div className="withdraw-form" style={boxStyle}>
                    <div className="enter-amount">
                        <h3>Enter amount you want to Withdraw</h3>
                        <input type="text" placeholder="$0" style={inputStyle}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Withdrawal;