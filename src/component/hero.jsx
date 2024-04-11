
import girl from '../../public/manhand.png'

function Hero() {
    const styler = {
        background: `linear-gradient(transparent, #0C0E13),url(${girl})`,
        backgroundSize: `700px`,
        backgroundPosition: `center`,
        backgroundRepeat: `no-repeat`,

    }

    return (
        <div className="hero-section">
            <div className="hero-left">
              <h1>BigBankFX - A Better Way To Invest, Crypto Currency and Forex</h1>
              <p>Meet Better, feel and experience a better way to invest in everything <br /> No more struggling, striving, it's just better </p>
              <p className="bright-p">Invest and earn <br /> with <span>Up to 2.5% - 5.0% daily </span>profit</p>
              <div className='hero-sign'>
                  <input type="email" placeholder='your@gmail.com' />
                  <button>Get Started</button>

              </div>
            </div>
            <div className="hero-right" style={styler}></div>
        </div>
    )
}

export default Hero;