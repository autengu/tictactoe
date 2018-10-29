import React, { Component } from 'react';
import '../App.css';

import { DragSource } from 'react-dnd';

const Types = {
  ITEM: 'XO'
};

const itemSource = {
  beginDrag(props) {
    console.log('yey start draggin m8!!');
    
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class XO extends Component {
  render() {
    const { isDragging, connectDragSource, src } = this.props;

    return connectDragSource(
      <div className="XO" key={this.props.key}>
        {this.props.value}
      </div>
    );
  }
}

export default DragSource(Types.ITEM, itemSource, collect)(XO);
