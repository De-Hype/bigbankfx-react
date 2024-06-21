


function SatisfiedCustomers() {

    const allPic = [
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBvcnRyYWl0fGVufDB8fDB8fHww",
        "https://static01.nyt.com/newsgraphics/2020/11/12/fake-people/4b806cf591a8a76adfc88d19e90c8c634345bf3d/fallbacks/mobile-05.jpg",
        "https://img.freepik.com/free-photo/close-up-upset-american-black-person_23-2148749582.jpg",
    ];

    const showPic = allPic.map((eachone)=> {
        const stylo = {
            background: `url(${eachone})`,
            backgroundSize: `cover`,
            backgroundPosition: `center`,
            width: `35px`,
            height: `35px`,
            borderRadius: `50%`,
            border: `2px solid white`,
            
        }
        return <div className="sat-img" style={stylo}>
        </div>
    })

    return (
        <div className="satisfied">
            <div className="satisfied-left">
                <div className="sat-box">
                    <h1>14</h1>
                    <p>Years of<br/> experince</p>
                </div>
                <div className="sat-box">
                    <h1>5M</h1>
                    <p>Customers invested</p>
                </div>
            </div>
            <div className="satisfied-right">
                <div  className="sat-r-box">
                    <div className="sat-box-pic">
                        {showPic}
                    </div>
                    <p className="sat-box-text">5M+ satisfied customers</p>
                </div>
            </div>
        </div>
    )
}

export default SatisfiedCustomers;