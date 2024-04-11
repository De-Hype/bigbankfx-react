import Hero from "./hero";
import Navbar from "./navbar";
import SatisfiedCustomers from "./satisfiedCustomers";
import Partners from "./partners";
import Steps from "./steps";
import Flexibilty from "./flexibilty";
import InvestmentPlan from "./investmentPlan";
import Review from "./review";
import WorldMap from "./worldMap";
import Milestone from "./milestone";
import VideoPage from "./videopage";
import Footer from "./footer";
import TradingView from "./tradingview";


function Homepage() {

    return (
        <div className="homepage">
     <Navbar />
        <Hero />
        <SatisfiedCustomers />
        <Partners />
        <Steps />
        <Flexibilty />
        <InvestmentPlan />
        <Review />
        <WorldMap />
        <Milestone />
        <VideoPage />
       
        
        </div>
    )
}

export default Homepage;