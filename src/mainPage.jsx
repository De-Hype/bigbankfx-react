import "./dashcss.css"
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from "@mui/material";
import TopBar from "./scenes/global/Topbar";
import DashBoard from "./scenes/Dashboard";
import { Route, Routes, BrowserRouter, NavLink } from "react-router-dom";
import SideBar from "./scenes/global/Sidebar";
import Line from "./scenes/Line";
//import Geography from "./scenes/geography";
import Team from "./scenes/Team";
//import Invoices from "./scenes/invoices";
//import Contacts from "./scenes/contacts";
//import Bar from "./scenes/bar";
//import Form from "./scenes/form";
//import Pie from "./scenes/pie";
//import FAQ from "./scenes/faq";
//import Calendar from "./scenes/calendar";

function MainPage() {
    const [theme, colorMode] = useMode();
    return (
  <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <section className="dashboard">
      <SideBar />
        <main className="content">
            <TopBar />
            
            <Routes>
              <Route index element={<DashBoard />} />
              <Route path="/team" element={<Team />} />
              {/* <Route path="/contacts" element={<Contacts/>} /> */}
              {/* <Route path="/invoices" element={<Invoices />} /> */}
              {/* <Route path="/form" element={<Form />} /> */}
              {/* <Route path="/bar" element={<Bar />} /> */}
              {/* <Route path="/pie" element={<Pie/>} /> */}
              <Route path="/line" element={<Line />} />
              {/* <Route path="/faq" element={<DashBoard />} /> */}
              {/* <Route path="/geography" element={<Geography/>} /> */}
              {/* <Route path="/calendar" element={<Calendar />} /> */}
            </Routes>
        </main>
        </section>
    </ThemeProvider>
  </ColorModeContext.Provider>
    )
}

export default MainPage;