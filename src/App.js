import React, { Component } from 'react';
import Board from './Board/Board';
import TicTacBar from './TicTacBar/TicTacBar';
import './App.css';

import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import DropGrid from './DropGrid/DropGrid';

class App extends Component {

  state = {
    drops: []
  };

  addToDroppedItems = (itemId) => {
    this.setState(prevState => ({
      drops: [...prevState.drops, itemId]
    }));
  }

  render() {
    const { drops } = this.state;
    return (
      <div className="App">
        Super awesome Tic Tac Toe game (without any actual game logic but hey ...)
        <TicTacBar drops={this.state.drops} />
        <DropGrid addToDroppedItems={this.addToDroppedItems} drops={this.state.drops} />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
