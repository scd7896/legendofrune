import React from 'react'
import {useDispatch} from 'react-redux'
import { SET_CARD_DECK } from '../action';
const CardList = ({cardList})=>{
    const dispatch = useDispatch();
    const setCardToDeck = (el) =>()=>{
        const data = {
            cardCode : el.cardCode,
            cost : el.cost,
            region : el.region,
        }
        dispatch({
            type : SET_CARD_DECK,
            data : data
        })
        console.log(el);
    }
    return(
        <div className = "card_list_container">
            {cardList.filter((el,i)=>{
            return el.supertype === ''
            }).map((el, i)=>{
                return <img onClick = {setCardToDeck(el)} key = {i} width ={150} height = {150} src = {require(`../rune_image/ko_kr/img/cards/${el.cardCode}.png`) }alt = "이미지없음"/>
            })}
      </div>
    )
}

export default CardList