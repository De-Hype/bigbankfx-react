import Navbar from "./navbar";

function Contact() {

    return (
        <section>
            <Navbar />
        <div className="contact">
            <h1>Contact</h1>
            <p className="p">Whether you have a specific question or need assistance, we're here for you.</p>
            <h3><img src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png" alt="" /> Reach us through mail</h3>

            <div className="mail-box">
                <div className="mail-inputs">
                    <p>Name</p>
                    <input type="text" />
                </div>

                <div className="mail-inputs">
                    <p>Email Address</p>
                    <input type="text" />
                </div>

                <div className="mail-inputs">
                    <p>Subject</p>
                    <input type="text" />
                </div>

                <div className="mail-inputs">
                    <p>Message</p>
                    <textarea name="" id="" ></textarea>
                </div>

            </div>

            <button>Send Message</button>
        </div>
        </section>
    )
}

export default Contact;