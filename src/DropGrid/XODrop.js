import { DropTarget } from 'react-dnd';
import React, { Component } from 'react';

const Types = {
  ITEM: 'XO'
}

const squareTarget = {
  drop(props, monitor, component) {
    // Obtain the dragged item
    const item = monitor.getItem();

    props.addToDroppedItems({
      item: item.id,
      droppedTo: props.someKey
    });

    // You can do something with it
    //   ChessActions.movePiece(item.fromPosition, props.position);

    // You can also do nothing and return a drop result,
    // which will be available as monitor.getDropResult()
    // in the drag source's endDrag() method
    return { moved: true };
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

    this.props.drops.find(drop => drop.droppedTo === this.props.someKey) ? dropCell = <div className="DropCellDropped" /> : dropCell = <div className="DropCell" />

    return connectDropTarget(
      dropCell
    )
  }
}
export default DropTarget(Types.ITEM, squareTarget, collect)(XODrop)