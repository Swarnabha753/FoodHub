import { menu_list } from "../../assets/assets";
import "./ExploreMenu.css";

export default function ExploreMenu({category, setCategory}) {
    return (
        <div className="explore-menu" id="explore-menu">
            <h1>Explore our menu</h1>
            <p className="explore-menu-text">Deliciously crafted and delivered fresh! Satisfy your cravings with a wide variety of flavors, from hearty meals to light bites—conveniently at your doorstep.</p>
            <div className="explore-menu-list">
                {menu_list.map((item, index) => {
                    return (
                        <div onClick={() => setCategory(prev => prev ===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-items">
                            <img className={category===item.menu_name?"active":""} src={item.menu_image} alt=""/>
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })}
            </div>
            <hr />
        </div>
    );
}