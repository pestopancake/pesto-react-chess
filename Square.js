import React from 'react';
import Piece from './Piece';

export default class Square extends React.Component {
  constructor(data){
    this.state = data.data;
  }
  render() {
    var piece = <Piece data={this.state.piece} />;
    return (
      <button className="square" onClick={() => this.props.onClick()}>
        {piece}
      </button>
    );
  }
}