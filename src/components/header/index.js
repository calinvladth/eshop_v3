import React, {useEffect, useState} from "react";
import style from './index.module.sass'
import {Link, useLocation} from "react-router-dom";
import {HomePath, ShopPath} from "../../pages/home";
import {ContactPath} from "../../pages/contact/path";
import {CartPath} from "../../pages/cart/path";
import {useSelector} from "react-redux";
import CartSvg from "../../assets/icons/cart";
import LogoComponent from "../logo";

const HeaderComponent = () => {
    const location = useLocation()
    const [showLogo, setShowLogo] = useState(false)

    const cart = useSelector(state => state.cart)

    useEffect(() => {
        if (location.pathname === HomePath || location.pathname === ContactPath) setShowLogo(false)
        else setShowLogo(true)

    }, [location])

    return (
        <header className={style.box}>
            <div className={style.boxContent}>

                <div>
                    <div className={style.pages}>
                        <div className={location.pathname === HomePath ? style.linkActive : null}>
                            <Link to={HomePath}>
                                <span>Home</span>
                            </Link>
                        </div>
                        <div className={location.pathname === ShopPath ? style.linkActive : null}>
                            <Link to={ShopPath}>
                                <span>Shop</span>
                            </Link>
                        </div>
                        <div className={location.pathname === ContactPath ? style.linkActive : null}>
                            <Link to={ContactPath}>
                                <span>Contact</span>
                            </Link>
                        </div>
                    </div>
                </div>

                <div>
                    <div className={style.icons}>
                        <Link to={CartPath}>
                            <div
                                className={`${style.iconCart}`}>
                                {
                                    cart.data.total_quantity > 0
                                    &&
                                    <span>
                                            <span>{cart.data.total_quantity}</span>
                                        </span>
                                }
                                <CartSvg/>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            {
                showLogo && <LogoComponent light={false}/>
            }
        </header>
    )
}


export default HeaderComponent