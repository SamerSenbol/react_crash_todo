import React, { Component } from 'react'

export class TodoItem extends Component {
    getStyle = () => {
      return {
          textDecoration: this.props.todo.completed ? 
          'line-through' : 'none'
      }
    }
    render() {
        return (
            <div style={this.getStyle()}>
               <p>{this.props.todo.title}</p> 
            </div>
        )
    }
}

export default TodoItem
