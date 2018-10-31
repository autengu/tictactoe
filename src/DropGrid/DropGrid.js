import React, { Component } from 'react';
import XODrop from './XODrop';
import '../App.css';

class DropGrid extends Component {

    constructor(props) {
        super(props);
        this.addToDroppedItems = this.addToDroppedItems.bind(this);
    }

    addToDroppedItems = (drop) => {
        this.props.addToDroppedItems(drop);
    }

    render() {
        return (
            <div className="DropTable">
                <div>
                    <XODrop addToDroppedItems={this.addToDroppedItems} someKey={0} drops={this.props.drops} />
                    <XODrop addToDroppedItems={this.addToDroppedItems} someKey={1} drops={this.props.drops} />
                    <XODrop addToDroppedItems={this.addToDroppedItems} someKey={2} drops={this.props.drops} />
                </div>
                <div>
                    <XODrop addToDroppedItems={this.addToDroppedItems} someKey={3} drops={this.props.drops} />
                    <XODrop addToDroppedItems={this.addToDroppedItems} someKey={4} drops={this.props.drops} />
                    <XODrop addToDroppedItems={this.addToDroppedItems} someKey={5} drops={this.props.drops} />
                </div>
                <div>
                    <XODrop addToDroppedItems={this.addToDroppedItems} someKey={6} drops={this.props.drops} />
                    <XODrop addToDroppedItems={this.addToDroppedItems} someKey={7} drops={this.props.drops} />
                    <XODrop addToDroppedItems={this.addToDroppedItems} someKey={8} drops={this.props.drops} />
                </div>
            </div>
        )
    }
}
export default DropGrid;