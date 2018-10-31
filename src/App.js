import React, { Component } from 'react';
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
        <h2> Tic Tac Toe ReactDnD sample.</h2>
        <p></p>
        <TicTacBar drops={this.state.drops} />
        <DropGrid addToDroppedItems={this.addToDroppedItems} drops={this.state.drops} />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
