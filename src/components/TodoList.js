import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
  render() {
    const { items, clearList, handleDelete, handleEdit } = this.props;
    return (
      <section>
        <ul className="list-group my-5">
          <h3 className="text-capitalized text-center">todo list</h3>
          {items.map((item) => {
            return (
              <TodoItem
                key={item.id}
                title={item.title}
                handleEdit={() => handleEdit(item.id)}
                handleDelete={() => handleDelete(item.id)}
              />
            );
          })}
          <button className="btn btn-danger btn-block text-uppercase mt-5" onClick={clearList}>
            clear list
          </button>

        </ul>
      </section>
    );
  }
}
