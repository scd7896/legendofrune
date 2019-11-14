import React from 'react'
import {useSelector} from 'react-redux'
import CardList from '../molecules/CardList'
const BottomContainer = ()=>{
    const {cardList} = useSelector(state => state.card)
    return(
        <div>
            <CardList cardList = {cardList}/>
        </div>
    )
}

export default BottomContainer