import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { NavLink } from "react-router-dom";

function SidePhoneNav(props) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const navStyle = {
        transform: props.navOpen ? "translate(0px, 0px)" : "translate(-600px, 0px)",
        background: colors.primary[400],
    }

    const navLinker = {
        color: colors.primary[100],
    }

    return (
        <div className="phone-side-nav" style={navStyle}>
            <div className="cancel" onClick={props.openNav}>
                X
            </div>
            <div className="p-link-container">
                <NavLink to="/dash" className="linkor" style={navLinker} onClick={props.openNav}><div className="p-link">
                    <HomeOutlinedIcon className="phoneI" />
                    <p>Home</p>
                </div>
                </NavLink>
                <NavLink to="/dash/history" className="linkor" style={navLinker} onClick={props.openNav}><div className="p-link">
                    <PeopleOutlinedIcon className="phoneI" />
                    <p>Transaction History</p>
                </div>
                </NavLink>
                <NavLink to="/dash/deposit" className="linkor" style={navLinker} onClick={props.openNav}><div className="p-link">
                    <ContactsOutlinedIcon className="phoneI" />
                    <p>Deposit</p>
                </div>
                </NavLink>
                <div className="p-link">
                    <ReceiptOutlinedIcon className="phoneI" />
                    <p>Withdrawal</p>
                </div>
                <div className="p-link">
                    <PersonOutlinedIcon className="phoneI" />
                    <p>Log out</p>
                </div>
            </div>
        </div>
    )
}

export default SidePhoneNav;