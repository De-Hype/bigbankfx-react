import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

function TopBar(prop) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);


    return (
        <Box display="flex" justifyContent="space-between" p={2}>
            <Box
                display="flex"
                backgroundColor={colors.primary[400]}
                borderRadius="3px"
                className="no-bg"
            >
                <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" className="top-input"/>
                <IconButton type="button" sx={{ p: 1 }} className="top-input">
                    <SearchIcon />
                </IconButton>
                <MenuOutlinedIcon className="menu-icon" onClick={prop.openNav}/>

            </Box>


            <Box display="flex" className="top-icon-box">
                <IconButton onClick={colorMode.toggleColorMode}>
                {theme.palette.mode === "dark" ? (
                    <DarkModeOutlinedIcon  className="top-icons"/>
                ): (
                    <LightModeOutlinedIcon className="top-icons"/>
                )}
                </IconButton>
                <IconButton>
                <NotificationsOutlinedIcon className="top-icons"/>
                </IconButton>
                <IconButton>
                <SettingsOutlinedIcon  className="top-icons"/>
                </IconButton>
                <IconButton>
               <PersonOutlinedIcon className="top-icons"/>
                </IconButton>
            </Box>
        </Box>
    )
}

export default TopBar;