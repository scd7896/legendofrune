import React from 'react';
import {useSelector} from 'react-redux'
import DeckEditor from './pages/DeckEditor'
import cardData from './data/set1-ko_kr'
import './css/index.css'
function App() {
  const cards = useSelector(state => state.card)
  console.log('리덕스', cards)
  return (
    <div>
      <DeckEditor />
      
      
    </div>
  );
}

export default App;
