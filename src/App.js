import React from 'react';
import {useSelector} from 'react-redux'
import DeckEditor from './pages/DeckEditor'

import {DeckEncoder} from 'runeterra'
import './css/index.css'
function App() {
  const cards = useSelector(state => state.card)
  const deck = DeckEncoder.decode('CEAAECABAQJRWHBIFU2DOOYIAEBAMCIMCINCILJZAICACBANE4VCYBABAILR2HRL')
  for(let i = 0 ; i< deck.length; i++){
    deck[i].cost = i;
  }
  const code = DeckEncoder.encode(deck)
  return (
    <div>
      <DeckEditor />
    </div>
  );
}

export default App;
