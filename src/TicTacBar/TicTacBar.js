import React, { Component } from 'react';
import '../App.css';
import XO from '../XO/XO';

class TicTacBar extends Component {

  render() {
    var xo;
    this.xoList = [];
    for (let i = 0; i < 10; i++) {
      i % 2 === 0 ? xo = <XO value='X' key={i.toString()} /> : xo = <XO value='O' key={i.toString()} />;
      this.xoList.push(xo);
    }

    return (
      <div className="TicTacBar" >
        {this.xoList}
      </div>
    );
  }
}

export default TicTacBar;
