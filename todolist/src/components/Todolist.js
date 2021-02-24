import React, { Component } from 'react';
import Todoing from './Todoing';
import TodoInput from './TodoInput'
export default class Todolist extends Component {
  constructor(){
    super();
  }

  addItem=(value)=>{
    console.log(value);
    this.setState({
      value:value
    })
  }

  render() {
    return (
      <div>
          <TodoInput
            add={this.addItem}
          />
          <Todoing/>
      </div>
    )
  }
}
