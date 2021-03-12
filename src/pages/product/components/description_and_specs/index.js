import React from "react";
import style from './index.module.sass'
import {OrderByIndex} from "../../../../services/reorder";

const DescriptionAndSpecs = ({description, specs}) => (
    <div className={style.box}>
        <div>
            <AdditionalInformations specs={specs}/>
        </div>
        <div>
            <Description description={description}/>
        </div>
    </div>
)

const AdditionalInformations = ({specs}) => (
    <div>
        <h1>Additional Informations</h1>
        {
            OrderByIndex(specs).map(o => <div key={o.id} className={style.spec}>
                <p>{o.key}</p>
                <p>{o.value}</p>
            </div>)
        }
    </div>
)

const Description = ({description}) => (
    <div>
        <h1>Description</h1>
        <p>
            {description}
        </p>
    </div>
)

export default DescriptionAndSpecs