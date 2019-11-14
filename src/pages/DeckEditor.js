import React from 'react'
import CostFilter from '../molecules/CostFilter'
import BottomContainer from './BottomContainer'
import './css/DeckEditor.css'
const DeckEditor = ()=>{
    return(
        <div className = "container">
            <CostFilter/>
            <BottomContainer />
        </div>
    )
}

export default DeckEditor;