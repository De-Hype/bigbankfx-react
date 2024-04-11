
import account from '../../public/account.svg';
import deposit from '../../public/deposit.svg';
import wallet from '../../public/wallet.svg';
import profit from '../../public/profit.svg';


function Steps() {

    const allSteps = [
        {
            stepPic: account,
            stepH1: "Create An Account",
            stepP: "Open an account on our  platform",
        },
        {
            stepPic: deposit,
            stepH1: "Make A Deposit",
            stepP: `Open an account on our platform`,
        },
        {
            stepPic: wallet,
            stepH1: "Add Wallets",
            stepP: `adding wallets is fast and safe`,
        },
        {
            stepPic: profit,
            stepH1: "Get Daily Profit",
            stepP: `adding wallets is fast and safe`,
        },
    ]

    const showSteps = allSteps.map((eachStep) => {

        const myStyle = {
            background: `url(${eachStep.stepPic})`,
            backgroundSize: `contain`,
            backgroundRepeat: `no-repeat`,
            backgroundPosition: `center`,
        }

        return <div className="step">
        <div className="step-pic" style={myStyle}></div>
        <div className="step-info">
            <h1>{eachStep.stepH1}</h1>
            <p>{eachStep.stepP}</p>
        </div>
    </div>
    })


   

    return (
        <div className="how">
            <div className="how-heading">
                <h1>How <span>BigBankFX </span>Works</h1>
                <p>Learn how BigBankFX will give you more value on managing
                    your money wisely,  <br />it's simple and great to know</p>
            </div>

            <div className="how-steps">
                {showSteps}
            </div>
        </div>
    )
}


export default Steps;