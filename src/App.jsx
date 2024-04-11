import Homepage from "./component/Homepage";
import { Routes, Route} from "react-router-dom";
import Navbar from "./component/navbar";
import Footer from "./component/footer";
import AboutUs from "./component/aboutus";
import OurServices from "./component/ourservices";
import LegalInformation from "./component/legalInformation";
import Contact from "./component/contact";
import TermOfUse from "./component/termofuse";
import Login from "./component/login";
import SignUp from "./component/signup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainPage from "./mainPage";
import Team from "./scenes/Team";
//import Geography from "./scenes/geography";
//import Invoices from "./scenes/invoices";
//import Contacts from "./scenes/contacts";
//import Bar from "./scenes/bar";
//import Form from "./scenes/form";
import Line from "./scenes/Line";
//import Pie from "./scenes/pie";
//import FAQ from "./scenes/faq";
import Calendar from "./scenes/calendar";



function App() {

  
  
  return (
<section className="app" >

  <Routes>
    <Route index element={<Homepage />} />
    <Route path="aboutUs" element={<AboutUs />} />
    <Route path="services" element={<OurServices/>} />
    <Route path="legal" element={<LegalInformation />} />
    <Route path="contact" element={<Contact />} />
    <Route path="term" element={<TermOfUse />} />
    <Route path="login" element={<Login  />} />
    <Route path="signup" element={<SignUp />} />
    <Route path="dash" element={<MainPage />} >
        <Route path="team" element={<Team />} />
        <Route path="line" element={<Line />} />
    </Route>
    

  </Routes>

</section>
  ) 

}


export default App;