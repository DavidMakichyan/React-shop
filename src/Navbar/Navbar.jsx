import classes from './Navbar.module.scss';
import { Link } from 'react-router-dom';
import { GrCart } from "react-icons/gr";

function Navbar({ cartItems }) {
    return (
        <div className={classes["divv"]}>
            <div className={classes["Div-div"]}>
                <Link to={"/"}><p>accessories</p></Link>
            </div>
            <div className={classes["divDiv"]}>
                <div className={classes["dividiv"]}>
                    <Link to={'/'}><ul>Home</ul></Link>
                    <Link to={'/electronics'}><label>Electronics</label></Link>
                    <Link to={"/jewelery"}><label>Jewelery</label></Link>
                    <Link to={"/men"}><label>Men</label></Link>
                    <Link to={"/women"}><label>Women</label></Link>
                </div>
            </div>
            <div className={classes["DIVVID"]}>
                <Link to='/cart'>
                    <GrCart className={classes["icon"]} />
                    {cartItems.length > 0 && (
                        <span className={classes["cart-count"]}>{cartItems.length}</span>
                    )}
                </Link>
            </div>
        </div>
    );
}

export default Navbar;
