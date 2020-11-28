import React, { Component } from 'react'
import ReactDOM from 'react-dom'
// import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faBars, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fab, faBars, faCoffee)

const coffee = <FontAwesomeIcon icon={faCoffee} />

ReactDOM.render(coffee, document.body)

class Todos extends Component {

  state = {
    todos: [
      {
        id: 1,
        title: 'take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'buy an eraser',
        completed: false
      },
      {
        id: 3,
        title: 'don\'t be an idiot',
        completed: false
      }
    ]
  }

  render() {
    return (
      <div>
        { this.state.todos.title }
        <h3 className="App-todo-items container-border-left"><span className="App-todo-item-arrow">{ coffee }</span> something</h3>
      <h3 className="App-todo-items container-border-left"><span className="App-todo-item-arrow">{ coffee }</span> <FontAwesomeIcon icon={coffee} /> something else</h3>
        <h3 className="App-todo-items container-border-left"><span className="App-todo-item-arrow">{ coffee }</span> something yet again</h3>
      </div>
    )
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos

/*
constructor (props) {
  super(props)

}
*/

/*
<TodoItem />

return this.state.todos.map((todo) => (
  <div className="App-todo-list container-outline">
    <div className="App-todo-items container-outline">
      <TodoItem key={todo.id} todo={todo.title} />
    </div>
  </div>
))
*/
