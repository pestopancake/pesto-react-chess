import React from 'react';
import Piece from './Piece';

export default class Square extends React.Component {
  constructor(props){
    super()
  }
  render() {
    var piece = <Piece data={this.props.data.piece} />;
    return (
      <button className="square" onClick={() => this.props.onClick()}>
        {piece}
      </button>
    );
  }
}