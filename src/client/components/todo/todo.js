import React, { Component } from 'react';
import TodoItem from './todo-item';

class Todo extends Component {
  constructor (props) {
    super(props);

    this.state = {
      item: '',
      todoItems: []
    };
  }


  updateItem = (e) => {
    this.setState({
      item: e.target.value
    });
  }

  addItem = () => {
    this.setState(state => {
      const todoItems = state.todoItems.concat(state.item);

      return {
        todoItems,
        item: ''
      };
    });

    console.log(this.state.todoItems);
  };

  renderItem = (i) => {
    const item = this.state.item;
    return (
      <li key={i}>
        <TodoItem itemName={item} />
      </li>
    );
  }

  render () {
    const { todoItems } = this.state;
    return (
      <>
        <label>
          Add a new item
          <input
            type="text"
            value={this.state.item}
            onChange={(e) => this.updateItem(e)}
          />
        </label>
        <button onClick={this.addItem}>
          Add
        </button>
        <ul>
          {todoItems.map(this.renderItem)}
        </ul>
      </>
    );
  }
}

export default Todo;
