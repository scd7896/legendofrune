import React from 'react'
import CostIcon from  '../atomic/CostIcon'
const CostFilter = () =>{
    const costs = [0,1,2,3,4,5,6,7,8,9,10,11,12,13]
    return(
        <div style = {{display : 'flex'}}>
            {costs.map((el,i)=>{
                return(<CostIcon cost = {el} key = {i}/>)
            })}
        </div>
    )
}
export default CostFilter;