import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { SET_CARD_DECK } from '../action';
const CardList = ({cardList})=>{
    const dispatch = useDispatch();
    const {costFilterList} = useSelector(state=> state.card)
    const setCardToDeck = (el) =>()=>{
        const data = {
            cardCode : el.cardCode,
            cost : el.cost,
            region : el.region,
            name : el.name
        }
        dispatch({
            type : SET_CARD_DECK,
            data : data
        })
        
    }
    return(
        <div className = "card_list_container">
            {cardList.filter(el=> el.rarity !== "없음")
                .filter((el)=>{
                if(costFilterList.length === 0){
                    return true
                }else{
                    const check = costFilterList.findIndex((list)=> list === el.cost)
                    return check !== -1
                }
            }).map((el, i)=>{
                return <img onClick = {setCardToDeck(el)} key = {i} width ={200} height = {200} src = {require(`../rune_image/ko_kr/img/cards/${el.cardCode}.png`) }alt = "이미지없음"/>
            })}
      </div>
    )
}

export default CardList