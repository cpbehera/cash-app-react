import './Main.css';

const Main = ()=>{
    return (
        <main>
            <div className="uppersection">
                <img src="./intro-cube.png" alt="intro-cube" />
                <img src="./intro-stairs.png" alt="intro-stairs" />
            </div>
            <div className="middlesection">
                <div className='heading'>
                    <h2>Cash</h2>
                    <h2>App</h2>
                </div>
                <img src="./intro-phone.png" alt="intro-phone" />
            </div>
            <div className="lowersection">
                <img src="./intro-cubes.png" alt="intro-cubes" />
                <img src="./intro-pillar.png" alt="intro-pillar" />
            </div>
        </main>
    )
}

export default Main;