import React, { Component } from 'react';
import XODrop from './XODrop';
import '../App.css';

class DropGrid extends Component {
    render() {
        return (
            <div>
                <div>
                    <XODrop key='0' />
                    <XODrop key='1' />
                    <XODrop key='2' />
                </div>
                <p></p>
                <div>
                    <XODrop key='3' />
                    <XODrop key='4' />
                    <XODrop key='5' />
                </div>
                <div>
                    <XODrop key='6' />
                    <XODrop key='7' />
                    <XODrop key='8' />
                </div>
            </div>
        )
    }
}
export default DropGrid;