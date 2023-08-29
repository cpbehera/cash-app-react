import './Nav.css';
import {useState} from 'react';

const Nav = () => {
    const [nav,setNav] = useState(false);

    const navShow = ()=>{
        setNav(true);
    }
    const navHide = ()=>{
        setNav(false);
    }
    return (
        <nav>
            <div className="logo">
                <img src="./logo.png" alt="cash logo" />
            </div>
            <div className={nav?"menuopen":"menu"}>
                <ul>
                    <li><a href="/">Sign in</a></li>
                    <li><a href="/">Legal</a></li>
                    <li><a href="/">Licenses</a></li>
                    <li><a href="/">Security</a></li>
                    <li><a href="/">Careers</a></li>
                    <li><a href="/">Press</a></li>
                    <li><a href="/">Support</a></li>
                    <li><a href="/">Status</a></li>
                    <li><a href="/">Codeblog</a></li>
                </ul>
            </div>
            <div className="eyelogo">
                <img src="./eye button.png" alt="eye button" />
            </div>
            <div className="mobilemenu">
                <span onClick={nav? navHide : navShow}>&#9776;</span>
            </div>

        </nav>
    )
}

export default Nav;