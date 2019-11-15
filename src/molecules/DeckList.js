import React,{useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {DeckEncoder, Card} from 'runeterra'
import cardList from '../data/set1-ko_kr'
import DeckCard from '../atomic/DeckCard'
import { SET_DECODE_DECK } from '../action'
const DeckList = ()=>{
    const dispatch = useDispatch();
    const [codeText, setCodeText] = useState('')
    const {deckList} = useSelector(state => state.card)
    const textChange = (e)=>{
        setCodeText(e.target.value)
    }
    const encodingDeckCode = (e)=>{
        
        
        const encodeDeck = deckList.map((el,i)=>{
            const tmpCard = new Card();
            tmpCard.code = el.cardCode;
            tmpCard.count = el.count;
            return tmpCard;
        })
        
        const code = DeckEncoder.encode(encodeDeck)
        setCodeText(code)
    }
    const decodeDeckCode = ()=>{
        const deck = DeckEncoder.decode(codeText);
        
        const decodeDeck = deck.map((el)=>{
            const index = cardList.findIndex((card)=> card.cardCode === el.code)
            const targetCard = {
                name : cardList[index].name,
                cost : cardList[index].cost,
                region : cardList[index].region,
                cardCode : cardList[index].cardCode
            }
            return targetCard
        })
        dispatch({
            type : SET_DECODE_DECK,
            data : decodeDeck
        })
        console.log(decodeDeck)
    }
    return(
        <div>
            <div>
                <input type = "text" value = {codeText} onChange = {textChange}/>
                <button onClick = {decodeDeckCode}>가져오기</button>
                <button onClick = {encodingDeckCode}>발급하기</button>
            </div>    
            
            {deckList.map((el,i)=>{
                return <DeckCard cardData = {el} key = {i}/>
            })}
        </div>
    )
}
export default DeckList;