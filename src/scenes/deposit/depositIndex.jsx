import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { useState } from "react";
import PaymentMethod from "./PaymentMethod";
import SelectedMethod from "./selectedMethod";

function Deposit() {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [selectedMethod, setSelectedMethod] = useState("card");

    function selectMethod(event) {
        setSelectedMethod(()=> {
            return event.target.id
        });
      
    }

    const method = {
        background: colors.primary[400],
    }

    return (
        <section className="deposit-container">
         <div className="deposit-left">
            <PaymentMethod selectedMethod={selectedMethod} selectMethod={selectMethod}/>
         </div>
         <div className="deposit-right" style={method}>
            <SelectedMethod selectedMethod={selectedMethod}/>
         </div>
        </section>
    )
}

export default Deposit;