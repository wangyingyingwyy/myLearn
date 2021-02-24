import React, { Component } from 'react'
import { Input } from 'antd';
import './todo.css'
export default class TodoInput extends Component {

  handleInput=(e)=>{
    if(e.keyCode===13){
      let inputValue=e.target.value;
      this.props.add(inputValue);
    }
  }
  render() {
    return (
      <div className="input-all">
        <Input
          placeholder="添加"
          className="todo-input"
          onKeyDown={this.handleInput}
        />
      </div>
    )
  }
}
