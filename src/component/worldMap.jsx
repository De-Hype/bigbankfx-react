import world from '../../public/world.png'

function WorldMap() {


    const stylo = {
        background: `url(${world})`,
        backgroundSize: `800px`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center`,
    }
    return (
        <div className="world-map" style={stylo}>
            <div className='world-box w-box1'>
                <div className='bottom-arrow'>
                    <h1>$82,000,000</h1>
                    <p>Investment <br />recieved</p>
                </div>
                <div className='bottom-world'></div>
            </div>
            <div className='world-box w-box2'>
                <div className='bottom-arrow'>
                    <h1>$82,000,000</h1>
                    <p>Investment <br />recieved</p>
                </div>
                <div className='bottom-world'></div>
            </div>
        </div>
    )
}

export default WorldMap;