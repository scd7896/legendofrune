import React from 'react'
import CostFilter from '../molecules/CostFilter'
import BottomContainer from './BottomContainer'
import RegionFilter from '../molecules/RegionFiter'
import './css/DeckEditor.css'
const DeckEditor = ()=>{
    return(
        <div className = "container">
            <RegionFilter/>
            <CostFilter/>
            <BottomContainer />
        </div>
    )
}

export default DeckEditor;