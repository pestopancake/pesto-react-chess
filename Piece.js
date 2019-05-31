import React from 'react';

export default class Piece extends React.Component {
  constructor(props){
    super()
  }
  render() {
    return (
      <div>
        {this.props.data.type}
      </div>
    )
  }
}