import React from 'react'
import style from './index.module.sass'
import {headerData, homepageData} from "../../../../data";
import {setBackgroundImage} from "../../../../services/image";
import {useHistory} from "react-router";
import {ShopPath} from "../../index";

const HeroComponent = () => {
    const history = useHistory()
    return (
        <div className={style.box}>
            <div className={style.boxContent}>

                <div className={style.boxHero} style={setBackgroundImage(homepageData.hero_image)}>

                    <div className={style.boxLogo}>
                        <div>
                            <img src={headerData.logo_light} alt=""/>
                        </div>
                    </div>
                    <div className={style.boxText}>
                        <div>
                            <h1>{homepageData.hero_title}</h1>
                            <button
                                className="button"
                                onClick={() => history.push(ShopPath)}
                            >{homepageData.hero_shop_button}</button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default HeroComponent