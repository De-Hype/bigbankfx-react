import Header from "../dashcomponent/Header";
import { Box, IconButton, Typography } from "@mui/material";
import { tokens } from "../theme";
import { useTheme } from "@mui/material";
import { DownloadOutlined } from "@mui/icons-material";
import LineChart from "../dashcomponent/LineChart";

function DashBoard() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const localStorageUser = localStorage.getItem("user");
    const person = JSON.parse(localStorageUser)

    const accountDetails = [
        {
            title: "My Investment Asset",
            icon: "bi-person-fill",
            amount: "0",
            rate: "120",
            color: "#873DCF"
        },
        {
            title: "Yearly Profit",
            icon: "bi-person-fill",
            amount: "0",
            rate: "40",
            color: "#286B91"
        },
        {
            title: "Profit Margin",
            icon: "bi-person-fill",
            amount: "0",
            rate: "300",
            color: "#1F6A5D"
        },
    ];

    const transactionHistory = [
        {
            type: "deposit",
            date: "23-07-2024",
            amount: "24,000",
            status: "success"
        },
        {
            type: "withdrawal",
            date: "23-07-2024",
            amount: "2,000",
            status: "success",
        },
        {
            type: "withdrawal",
            date: "23-07-2024",
            amount: "2,000",
            status: "success",
        },
        {
            type: "withdrawal",
            date: "23-07-2024",
            amount: "2,000",
            status: "success",
        },


    ]

    const showAccountDetails = accountDetails.map((each) => {

        let myStyle = {
            background: each.color,
        }

        return <Box key={each.title} sx={{ backgroundColor: colors.primary[400] }} width="100%" padding="20px 15px" borderRadius="5px">
            <div className="investBox-top">
                <p>{each.title}</p>
                <div className="invest-icon" style={myStyle}><i className={each.icon}></i></div>
            </div>
            <div className="investBox-bottom">
                <h1>${each.amount}</h1>
                <p>+{each.rate} today</p>
            </div>
        </Box>
    });

    const showHistory = transactionHistory.map((each, index) => {
        const myStyle = {
            background: each.status === "success" ? colors.greenAccent[700] : "orangeRed",

        }
        return <div className="history-box" key={index}>
            <Typography variant="h5" color={colors.greenAccent[400]} width="40%">{each.type}</Typography>
            <Typography width="40%">{each.date}</Typography>
            <button style={myStyle}>${each.amount}</button>
        </div>
    })

    return (
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title={`Hi, ${person.first_name}`} subtitle="welcome to your dashboard" />
            </Box>
            <div className="investment-amounts">
                {showAccountDetails}
            </div>
            <div className="charts" >
                <Box sx={{ backgroundColor: colors.primary[400] }} width="40%" height="255px" borderRadius="5px" overflow="auto" className="histogo">
                    <Typography variant="h3" fontSize="19px" fontWeight="800" padding="9px 13px" >Recent Transactions</Typography>
                    {showHistory}
                </Box>
                <Box 
                backgroundColor={colors.primary[400]}
                padding="10px 15px"
                borderRadius="6px"
                >
                    <Box display="flex"
                    justifyContent="space-between"
                   >
                    <Box>
                        <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>
                            Revenue Generated
                        </Typography>
                        <Typography variant="h3" fontWeight="500" color={colors.greenAccent[500]}>
                            $44,000
                        </Typography>
                    </Box>
                    <Box>
                        <IconButton>
                         <DownloadOutlined 
                         sx={{fontSize: "26px", color: colors.greenAccent[500]}}
                         />
                        </IconButton>
                    </Box>
                    </Box>
                    <Box height="200px" mt="-20px" width="565px" className="line">
                        <LineChart isDashboard={true} />
                    </Box>
                </Box>
            </div>
        </Box>
    )
}

export default DashBoard;