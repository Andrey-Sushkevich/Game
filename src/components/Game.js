import React from 'react';
import '../App.css';

export default class Game extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
    }

    render(){
        return (
            <div className='game'>
                {Game}
            </div>
        )
    }
}

export class Game extends React.Component {
    state = {
      cards: [],
      count: 0,
      gameStarted: false,
      cardsToMatch: [],
      cardsMatched: []
    };

}
componentDidUpdate = () => {
    if (this.state.count === 2) {
      setTimeout(this.Match, 100);
    }
  }

Match = () => {
    const { cardsToMatch, cards } = this.state;
    let card1 = cardsToMatch[0];
    let card2 = cardsToMatch[1];

    if (cards[cardsToMatch[0]] === cards[cardsToMatch[1]]) {
      this.setState(currentState => {
        return {
          count: 0,
          cardsToMatch: [],
          cardsMatched: currentState.cardsMatched.concat(card1, card2)
        };
      });
    } else {
      this.setState(currentState => {
        return {
          count: 0,
          cardsToMatch: []
        };
      });
    }
  }