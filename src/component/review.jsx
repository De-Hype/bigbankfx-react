
function Review() {

    const reviewPic = [
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBvcnRyYWl0fGVufDB8fDB8fHww",
        "https://static01.nyt.com/newsgraphics/2020/11/12/fake-people/4b806cf591a8a76adfc88d19e90c8c634345bf3d/fallbacks/mobile-05.jpg",
        "https://img.freepik.com/free-photo/close-up-upset-american-black-person_23-2148749582.jpg",
    ];

    const showReview = reviewPic.map((eachReview) => {

        const stylers = {
            background: `url(${eachReview})`,
            backgroundSize: `cover`,
            backgroundPosition: `center`,
        }
        return <div className="user-review">
                    <div className="user-review-pic" style={stylers}>
                    </div>
                    <div className="review-star">
                        <i className="bi-star-fill"></i>
                        <i className="bi-star-fill"></i>
                        <i className="bi-star-fill"></i>
                        <i className="bi-star-fill"></i>
                        <i className="bi-star-fill"></i>
                    </div>
                    <div className="user-review-text">
                        Investing with BigBankFX is just better you know, like literally
                        they didnt want us to regret investing in them
                    </div>
                    <div className="user-review-name">Mary Jane</div>
                </div>
    })

   

    return (
        <div className="review">
            <div className="review-head">
                <h1>What People Say About <br /> <span>"BigBankFX"</span> </h1>
                <p>People are very positive about our services, here is <br />
                    is what people are saying about us</p>
            </div>

            <div className="review-body">
               {showReview}
            </div>
        </div>
    )
}

export default Review;