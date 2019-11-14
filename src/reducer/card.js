import produce from 'immer'
import cardList from '../data/set1-ko_kr'
import { RMV_COST_FILTER,ADD_COST_FILTER } from '../action'
const initItialState = {
    cardList : cardList,
    deckList : [],
    costFilterList : []
}
const card = (state = initItialState, action )=>{
    return produce(state, (draft)=>{
        switch(action.type){
            case ADD_COST_FILTER : 
                draft.costFilterList.push(action.data)
                break;
            case RMV_COST_FILTER :
                draft.costFilterList = draft.costFilterList.filter((el)=> el!== action.data)
                break;
            default :
                break;
        }
    })
}

export default card;