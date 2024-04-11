import redBull from '../../public/redbull.png'


function PhoneTop(prop) {

    return (
        <div className="phone-top">
            <div className="phone-logo">
            <img src={redBull} alt="" />
            <h1>BigBankFX</h1>
            </div>
            <div className="phoner">
                <div className="phone-pic"></div>
            
            </div>
        </div>
    )
}

export default PhoneTop;