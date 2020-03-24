import React from 'react';


export class Todos extends React.Component{
    render(){
      return this.props.todos.map((todo) => (
      <h3>{todo.title}</h3>

      ));
    }
}

export default Todos;