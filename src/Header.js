import { Link } from 'react-router-dom';
import { useState } from 'react';
function Header(props) {
    const [showMenu, setShowMenu] = useState(false);
    
    function menuClick(){
        setShowMenu(!showMenu)
    }
    return (
        <section className="sub-header">
            <nav>
                <img src="imgs/logo.png" className="logo" alt="" />
                <div style={ showMenu ? {right:'0px'} : {right:'-200px'}} className="nav-links" id="navLinks">
                    <i onClick={menuClick} className="fa-solid fa-xmark" />
                    <div>
                        <Link to="/">
                            ANA SƏHİFƏ
                        </Link>
                        <Link to="/about">
                            HAQQIMIZDA
                        </Link>
                        <Link to="/action">
                            AKADEMİK FƏALİYYƏT
                        </Link>
                        <Link to="/student">
                            TƏLƏBƏ
                        </Link>
                        <Link to="/contact">
                            ƏLAQƏ
                        </Link>
                    </div>
                </div>
                <i onClick={menuClick} className="fa-solid fa-bars" />
            </nav>
            <h1>{props.title}</h1>
        </section>
    )
}
export default Header;
