import React from 'react';
import ReactDOM from 'react-dom';

const myfirstelement = <h1>Hello React!</h1>

class Car extends React.Component{
  render(){
    return <h1>Hi I am a {this.props.color} car</h1>;
  }
}

ReactDOM.render(<Car color = "red"/>, document.getElementById('root'));
