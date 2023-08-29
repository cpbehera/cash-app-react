import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="downloadbuttons">
                <button>
                    <span><img src="./app-store.png" alt="app-store" /></span>
                    <span>App Store</span>
                </button>
                <button>
                    <span><img src="./play-store.png" alt="play-store" /></span>
                    <span>Google Play</span>
                </button>
            </div>
            <div className='privacy-policy'>
                <img src="./arrow.png" alt="arrow" className="arrow" />
                <div className="description">
                    <p>
                        Brokerage services by Cash App Investing LLC, member FINRA / SIPC.
                        See our BrokerCheck. Investing involves risk; you may lose money. Bitcoin trading offered by Cash App. Cash App Investing does not trade bitcoin and Cash App is not a member of FINRA or SIPC. Cash App facilitates banking services through Sutton Bank and Lincoln Savings Bank, Members FDIC.
                    </p>
                </div>
                <div className="social">
                    <img src="./message.png" alt="message" />
                    <img src="/twitter.png" alt="twitter" />
                    <img src="/insta.png" alt="insta" />
                </div>
            </div>
        </footer>
    )
}

export default Footer;