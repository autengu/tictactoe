import React, { Component } from 'react';
import '../App.css';
import XO from '../XO/XO';

class TicTacBar extends Component {
  render() {
    let xo;
    this.xoList = [];

    for (let i = 0; i < 10; i++) {
      if (!this.props.drops.find(drop => drop.item === i.toString())) {
        i % 2 === 0 ? xo = <XO id={i.toString()} value='X' key={i.toString()} /> : xo = <XO id={i.toString()} value='O' key={i.toString()} />;
      } else {
        xo = <div className="XOEmpty" key={i.toString()}></div>
      }

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
