import Homepage from "./component/Homepage";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar";
import Footer from "./component/footer";
import AboutUs from "./component/aboutus";
import OurServices from "./component/ourservices";
import LegalInformation from "./component/legalInformation";
import Contact from "./component/contact";
import TermOfUse from "./component/termofuse";
import Login from "./component/login";
import SignUp from "./component/signup";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MainPage from "./mainPage";
import Team from "./scenes/Team";
import Line from "./scenes/Line";
import Deposit from "./scenes/deposit/depositIndex";
import Withdrawal from "./scenes/withdrawal/withdrawalIndex";
import Notification from "./scenes/notifications/notificationIndex";
import { Toaster } from "sonner";

function App() {


  return (
    <section className="app">
      <Toaster
        position="top-center"
        toastOptions={{
          unstyled: true,
          classNames: {
            error: "error-styles",
            success: "success-styles",
            info: "info-styles",
            warning: "warning-styles",
          },
        }}
      />
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="aboutUs" element={<AboutUs />} />
        <Route path="services" element={<OurServices />} />
        <Route path="legal" element={<LegalInformation />} />
        <Route path="contact" element={<Contact />} />
        <Route path="term" element={<TermOfUse />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="dash" element={<MainPage />}>
          <Route path="history" element={<Team />} />
          <Route path="deposit" element={<Deposit />} />
          <Route path="withdrawal" element={<Withdrawal />} />
          <Route path="notification" element={<Notification />} />
        </Route>
      </Routes>
    </section>
  );
}

export default App;
