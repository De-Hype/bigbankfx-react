import { Box } from "@mui/material";
import Header from "../dashcomponent/Header";
import LineChart from "../dashcomponent/LineChart";

const Line = () => {
    return <Box m="20px">
     <Header title="Line Chart" subtitle="Simple Line chart" />
     <Box height="75vh">
    <LineChart />
     </Box>
    </Box>
    me
}

export default Line;