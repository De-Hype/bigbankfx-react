
function Review() {

    const reviewPic = [
        {
            imageUrl:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBvcnRyYWl0fGVufDB8fDB8fHww",
            text:"I have invested with BigbankFx for a long time now, and i will say that they are the very best.",
            name:"Mary Jane"
        },
        {
            imageUrl:
            "https://static01.nyt.com/newsgraphics/2020/11/12/fake-people/4b806cf591a8a76adfc88d19e90c8c634345bf3d/fallbacks/mobile-05.jpg",
            text:"BigBankX is the best investment platform that i know of.",
            name:"Lucy Jack"
        },
        {
            imageUrl:
            "https://img.freepik.com/free-photo/close-up-upset-american-black-person_23-2148749582.jpg",
            text:"Investing with BigBankFX is just better you know, like literally they didnt want us to regret investing in them",
            name:"Tom Samuel"
        }
    ];

    const showReview = reviewPic.map((eachReview, index) => {

        const stylers = {
            background: `url(${eachReview})`,
            backgroundSize: `cover`,
            backgroundPosition: `center`,
        }
        return <div key={index} className="user-review">
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
                        {eachReview.text}
                    </div>
                    <div className="user-review-name">{eachReview.name}</div>
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