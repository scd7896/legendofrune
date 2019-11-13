import produce from 'immer'
import cardList from '../data/set1-ko_kr'
const initItialState = {
    cardList : cardList,
    deckList : [],
}
const card = (state = initItialState, action )=>{
    return produce(state, (draft)=>{
        switch(action.type){
            default :
                break;
        }
    })
}

export default card;