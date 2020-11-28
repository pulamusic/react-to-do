import React, { Component } from 'react'
// import ReactDOM from 'react-dom'
// import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faBars, faCoffee } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// library.add(fab, faBars, faCoffee)

// const coffee = <FontAwesomeIcon icon={faCoffee} />

// ReactDOM.render(coffee, document.body)

class Todos extends Component {
  constructor(props) {
    super(props)
    this.state = {
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
  }

  render() {

    const title = this.state.todos.title

    return (
      <div>
        { title }
        <div class="clearfix"></div>
        <div className="App-todo-item-shadow">
          <a href="/">
            <h3 className="container-border-left App-todo-items"><span className="App-todo-symbol">&ni;</span> something</h3>
          </a>
        </div>

        <div className="App-todo-item-shadow">
          <a href="/">
            <h3 className="container-border-left App-todo-items"><span className="App-todo-symbol">&ni;</span> something else</h3>
          </a>
        </div>

        <div className="App-todo-item-shadow">
          <a href="/">
            <h3 className="container-border-left App-todo-items"><span className="App-todo-symbol">&ni;</span> something yet again</h3>
          </a>
        </div>

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
