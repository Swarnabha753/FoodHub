import { useContext, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
import "./Navber.css";

export default function Navber ({setShowLogin}) {
    
    const [menu, setMenu] = useState("");
    const {getTotalCartAmount,token, setToken} = useContext(StoreContext);

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        setToken("");
        navigate("/");
    }

    return (
        <div className="navber">
            <Link to="/"><img src={assets.logo} alt="" className="logo" /></Link>
            <ul className="navber-menu">
                <Link to="/" onClick={()=>setMenu("home")} className={menu === "home"?"active":""}>Home</Link>
                <a href="#explore-menu" onClick={()=>setMenu("menu")} className={menu === "menu"?"active":""}>Menu</a>
                <a href="#app-download" onClick={()=>setMenu("mobile-app")} className={menu === "mobile-app"?"active":""}>Mobile-app</a>
                <a href="#footer" onClick={()=>setMenu("contact-us")} className={menu === "contact-us"?"active":""}>Contact us</a>
            </ul>
            <div className="navber-right">
                <img src={assets.search_icon} alt="" />
                <div className="navber-search-icon">
                    <Link to="/cart"><img src={assets.basket_icon} alt="" /></Link>
                    <div className={getTotalCartAmount()===0?"":"dot"}></div>
                </div>
                {!token ? <button onClick={()=>setShowLogin(true)}>Sign In</button> : 
                <div className="navabr-profile">
                    <img src={assets.profile_icon} alt="" />
                    <ul className="navabr-profile-dropdown">
                        <li><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
                        <hr />
                        <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>LogOut</p></li>
                    </ul>
                </div>}
                
            </div>
        </div>
    )
}