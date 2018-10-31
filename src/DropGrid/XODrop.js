import { DropTarget } from 'react-dnd';
import React, { Component } from 'react';

const Types = {
  ITEM: 'XO'
}

const squareTarget = {
  drop(props, monitor, component) {
    const item = monitor.getItem();

    props.addToDroppedItems({
      item: item.id,
      value: item.value,
      droppedTo: props.someKey
    });

    return {};
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
  }
};

class XODrop extends Component {
  render() {
    const { connectDropTarget } = this.props;
    let dropCell;
    
    this.props.drops.find(drop => drop.droppedTo === this.props.someKey) ? dropCell = <div className="DropCellDropped" >
      {this.props.drops.find(drop => drop.droppedTo === this.props.someKey).value}
    </div> : dropCell = <div className="DropCell" />

    return connectDropTarget(
      dropCell
    )
  }
}
export default DropTarget(Types.ITEM, squareTarget, collect)(XODrop)