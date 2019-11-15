import React from 'react'
import './css/DeckCard.css'
const DeckCard = ({cardData})=>{
    let backGround;
    switch(cardData.region){
        case "아이오니아" :
            backGround = "aionia";
            break;
        case "녹서스" :
            backGround = "noxus";
            break;
        case "데마시아" :
            backGround = "demacia";
            break;
        case "그림자 군도":
            backGround = "shadow";
            break;
        case "프렐요드" :
            backGround = "frelyord";
            break;
        default :
            backGround = "fieldover"
    }
    return(
        <div className = {`deck_card_container ${backGround}`}>
            <p>{cardData.name}</p>
            <p>{cardData.count}</p>
        </div>
    )
}

export default DeckCard;