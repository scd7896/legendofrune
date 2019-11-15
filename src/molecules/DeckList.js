import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import DeckCard from '../atomic/DeckCard'
const DeckList = ()=>{
    const dispatch = useDispatch();
    const {deckList} = useSelector(state => state.card)
    
    return(
        <div>
            {deckList.map((el,i)=>{
                return <DeckCard cardData = {el} key = {i}/>
            })}
        </div>
    )
}
export default DeckList;