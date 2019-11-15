import produce from 'immer'
import cardList from '../data/set1-ko_kr'
import { RMV_COST_FILTER,ADD_COST_FILTER, SET_NAME_TEXT, SET_CARD_DECK, ALL_SET_DECK, RMV_CARD_DECK, SET_COST_FILTER, SET_DECODE_DECK } from '../action'

const initItialState = {
    cardList : cardList,
    deckList : [],
    costFilterList : [],
    filterName : "",
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
            case SET_NAME_TEXT :
                draft.filterName = action.data
                break;
            case SET_CARD_DECK :
                const check = draft.deckList.findIndex((el)=> el.cardCode === action.data.cardCode)
                if(check === -1){
                    draft.deckList.push({...action.data, count : 1})
                }else{
                    if(draft.deckList[check].count >=3){
                        break;
                    }
                    draft.deckList[check].count++;
                }
                break;
            case ALL_SET_DECK :
                for(let i = 0 ; i<action.data.length; i++){
                    draft.deckList.push(action.data[i])
                }
                break;

            case RMV_CARD_DECK: 
                const index = draft.deckList.findIndex((el)=> el.cardCode === action.data)
                draft.deckList[index].count--
                if(draft.deckList[index].count <= 0){
                    draft.deckList = draft.deckList.filter((el)=> el.cardCode !== draft.deckList[index].cardCode)
                }
                break;
            case SET_COST_FILTER :
                const test = draft.costFilterList.findIndex((el)=> el === action.data)
                if(test === -1){
                    draft.costFilterList.push(action.data)
                }else{
                    draft.costFilterList = draft.costFilterList.filter((el)=> el!== action.data)
                }
                break;
            case SET_DECODE_DECK:
                draft.deckList = action.data;
                break;
            default :
                break;
        }
    })
}

export default card;