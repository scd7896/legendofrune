import React from 'react';
import {useSelector} from 'react-redux'
import cardData from './data/set1-ko_kr'

function App() {
  const cards = useSelector(state => state.card)
  console.log('리덕스', cards)
  return (
    <div>
      {cardData.map((el, i )=>{
        return <img key = {i} width ={150} height = {150} src = {require(`./rune_image/ko_kr/img/cards/${el.cardCode}.png`) }alt = "이미지없음"/>
      })}
      
    </div>
  );
}

export default App;
