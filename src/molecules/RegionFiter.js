import React from 'react'
import './css/RegionFilter.css'
import { createRequire } from 'module'
const RegionFilter = ()=>{
    const arr = ["데마시아", "프렐요드", "아이오니아", "녹서스","필트오버 & 자운", `그림자 군도`]
    const imgarr = ["icon-demacia", "icon-freljord", "icon-ionia","icon-noxus","icon-piltoverzaun","icon-shadowisles"]
    return(
        <div style ={{alignSelf : "flex-start"}}>
            <p>지역</p>
            <div className = "region_filter_container">
                {arr.map((el,i)=>{
                    return <img key = {i} src = {require(`../rune_image/ko_kr/img/region/${imgarr[i]}.png`)}/>
                })}
            </div>
        </div>
    )
}

export default RegionFilter;