import React from "react";
import {headerData} from "../../data";
import style from './index.module.sass'

const LogoComponent = ({light=true}) => {

    return <div className={style.boxLogo}>
        <div>
            <img src={light ? headerData.logo_light : headerData.logo_dark} alt=""/>
        </div>
    </div>
}


export default LogoComponent