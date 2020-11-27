import { Component } from 'react'
import TodoItem from './TodoItem'

class Todos extends Component {
  render() {
    return this.state.todos.map((todo) => (
      <div className="App-todo-list container-outline">
        <div className="App-todo-items container-outline">
          <TodoItem key={todo.id} todo={todo} />
        </div>
      </div>
    ))
  }
}

export default Todos
