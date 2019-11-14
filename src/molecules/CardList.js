import React from 'react'

const CardList = ({cardList})=>{
    return(
        <div className = "card_list_container">
            {cardList.filter((el,i)=>{
            return el.supertype === ''
            }).map((el, i)=>{
            return <img key = {i} width ={150} height = {150} src = {require(`./rune_image/ko_kr/img/cards/${el.cardCode}.png`) }alt = "이미지없음"/>
            })}
      </div>
    )
}

export default CardList