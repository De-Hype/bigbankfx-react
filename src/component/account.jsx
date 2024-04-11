import { NavLink } from 'react-router-dom';
import noAccount from '../../public/no-account.svg'

function Account() {

    const styler = {
        background: `url(${noAccount})`,
        backgroundSize: `contain`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center`
    }

    return (
        <div className="account">
         <div className="account-pic" style={styler}></div>
         <div className="account-write-up">
            <h1>No Account Yet</h1>
            <p>To add an account, choose one of the deposit plan and deposit funds into selected account Plan</p>
            <NavLink to="../deposit"><button>Deposit</button> </NavLink>
         </div>
        </div>
    )
}

export default Account;