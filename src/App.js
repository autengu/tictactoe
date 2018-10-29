import React, { Component } from 'react';
import Board from './Board/Board';
import TicTacBar from './TicTacBar/TicTacBar';
import './App.css';

import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import DropGrid from './DropGrid/DropGrid';

class App extends Component {
  render() {
    return (
      <div className="App">
        Super awesome Tic Tac Toe game (without any actual game logic but hey ...)
        <TicTacBar />
        <DropGrid />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
