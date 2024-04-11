import { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";

import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <NavLink to={to} className="nav-link"><MenuItem active={selected === title} style={{ color: colors.grey[100] }} onClick={() => setSelected(title)} icon={icon}>
            <Typography>{title}</Typography>
            
        </MenuItem>
        </NavLink>
    )
}

function SideBar() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard")
    return (
        <Box
            sx={{
                "& .pro-sidebar-inner": {
                    background: `${colors.primary[400]} !important`,
                },
                "& .pro-icon-wrapper": {
                    backgroundColor: "transparent !important",
                },
                "& .pro-inner-item": {
                    padding: "5px 35px 5px 20px !important",
                },
                "& .pro-inner-item:hover": {
                    color: "#868dfb !important",
                },
                "& .pro-menu-item.active": {
                    color: "#6870fa !important",
                },
            }}
        >

            <Sidebar collapsed={isCollapsed} backgroundColor={colors.primary[400]} className="sidebar">
                <Menu iconShape="square">
                    {/* Logo and menu icon */}
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                        style={{
                            margin: "10px 0 20px 0",
                            color: colors.grey[100],
                        }}>
                        {
                            !isCollapsed && (
                                <Box
                                    display="flex"
                                    justifyContent="space-between"
                                    alignItems="center"
                                    ml="15px"
                                >
                                    <Typography variant="h3" color={colors.grey[100]}>
                                        BigBankFX
                                    </Typography>
                                    <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                        <MenuOutlinedIcon />
                                    </IconButton>
                                </Box>
                            )
                        }
                    </MenuItem>

                    {/*User */}
                    {!isCollapsed && (
                        <Box mb="25px">
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <img
                                    alt="profile-user"
                                    width="100px"
                                    height="100px"
                                    src={'../../public/banner.jfif'}
                                    style={{ cursor: "pointer", borderRadius: "50%" }}
                                />
                            </Box>

                            <Box textAlign="center">
                                <Typography variant="h2" color={colors.grey[100]} fontWeight="bold" sx={{ m: "10px 0 0 0" }}>Ed Roh </Typography>
                                <Typography variant="h5" color={colors.greenAccent[500]}>Vp Fancy Admin</Typography>
                            </Box>
                        </Box>
                    )}

                    {/*Menu items */}
                    <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                    <Item 
                    title="Dashboard"
                    to="/dash"
                    icon={<HomeOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                    />
                    <Typography
                    variant="h6"
                    color={colors.grey[300]}
                    sx={{m: "15px 0 5px 20px"}}
                    >Data</Typography>
                     <Item 
                    title="Transaction History"
                    to="/dash/team"
                    icon={<PeopleOutlinedIcon/>}
                    selected={selected}
                    setSelected={setSelected}
                    />
                     <Item 
                    title="Deposit"
                    to="/dash/line"
                    icon={<CalendarTodayOutlinedIcon/>}
                    selected={selected}
                    setSelected={setSelected}
                    />
                     <Item 
                    title="Withdrawal"
                    to="/invoices"
                    icon={<ReceiptOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                    />
                     <Typography
                    variant="h6"
                    color={colors.grey[300]}
                    sx={{m: "15px 0 5px 20px"}}
                    >Pages</Typography>
                     <Item 
                    title="Log Out"
                    to="/form"
                    icon={<PersonOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                    />
                    
                    </Box>

                </Menu>
            </Sidebar>

        </Box>
    )
}
export default SideBar;