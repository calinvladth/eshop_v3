import React from "react";
import style from './index.module.sass'
import {setBackgroundImage} from "../../../../services/image";
import {contactData, contactpageData, headerData} from "../../../../data";

const HeroComponent = () => (
    <div className={style.box}>
        <div className={style.boxContent}>

            <div className={style.boxHero} style={setBackgroundImage(contactpageData.image)}>

                <div className={style.boxLogo}>
                    <div>
                        <img src={headerData.logo_light} alt=""/>
                    </div>
                </div>
                <div className={style.boxText}>
                    <div>
                        <h1>{contactpageData.title}</h1>
                        <h2>{contactpageData.subtitle}</h2>
                        <p>{contactData.address}</p>
                        <p>{contactData.phone}</p>
                        <p>{contactData.email}</p>
                    </div>
                </div>

            </div>

        </div>
    </div>
)

export default HeroComponent