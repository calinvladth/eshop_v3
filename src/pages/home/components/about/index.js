import React from "react";
import style from './index.module.sass'
import {homepageData} from "../../../../data";

const AboutComponent = () => (
    <div className={style.box}>
        <div className={style.boxContent}>

            <div>
                <h2>{homepageData.about_slogan}</h2>
            </div>
            <div>
                <div className={style.boxText}>
                    <h1>{homepageData.about_title}</h1>
                    <p>{homepageData.about_description}</p>
                </div>
            </div>
            <div>
                <h2>{homepageData.about_slogan}</h2>
            </div>

        </div>
    </div>
)

export default AboutComponent