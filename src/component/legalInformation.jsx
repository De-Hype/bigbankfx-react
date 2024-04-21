import Navbar from "./navbar";
import Footer from "./footer";

function LegalInformation() {
    
    return (
        <section>
            <Navbar />
        <div className="legal-information">
            <h1>Legal Information</h1>
            <h3>Information</h3>

            <p>
            With over $5.3 Trillion traded daily in the market, we are dedicated to giving our clients their own share of the profit daily. As a leading global market maker, SmartfinanceFX has one of the World’s Largest Independent traders and fund managers with clients from different parts of the World. Today, as a successful trade investment and asset management company, we are trusted by thousands of clients. Our sterling reputation, dedication to meeting our clients’ needs and innovative approach to business development are some driving forces behind our success.
            </p>


            <p>
            Please note that the only source of legitimate and up-to-date incorporation information about SmartfinanceFX LTD can be found on our website . This applies to registration number , legal information contained on the UK Registrar's website in relation to SmartfinanceFX LTD, as well as any additional information and any related data.
            </p>

            <p>
            SmartfinanceFX is one of the most reliable diversified financial investment service provider in the world. Our fundamental mission is to help customers and clients achieve their financial objectives. With offices location in the United States, Australia,Canada and headquartered in Uk, SmartfinanceFX have staffs with over 30 years of experience in combining financial development and trades. We are committed to pushing the boundaries of what constitutes the highest standards in trades and asset management.
            </p>

            <ul>
                <li><span>Registration Number:</span> 2335663</li>
                <li><span>Renewed on:</span> 22nd July 2019</li>
                <li>We have a reliable financial department that handles issues of payout and initial investment and other monetary transactions.</li>
                <li>We are known for making withdrawals stress-free and easy for our clients.</li>
                <li>We have a variety of trading platforms to meet every income level.</li>

                <li><img src="https://smartfinancefx.com/img/cert.jpg" alt="" width="100%" /></li>
            </ul>
        </div>
        <Footer />
        </section>
    )
}

export default LegalInformation;