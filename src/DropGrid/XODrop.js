import { DropTarget } from 'react-dnd';
import React, { Component } from 'react';

const Types = {
  ITEM: 'XO'
}

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget()
  }
}

class XODrop extends Component {
  render() {
    const { connectDropTarget } = this.props;

    return connectDropTarget(
      <div>___</div>
    )
  }
}
export default DropTarget(Types.ITEM, {}, collect)(XODrop)