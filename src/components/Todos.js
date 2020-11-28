import React, { Component } from 'react'
import PropTypes from 'prop-types'

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
    const todo = this.state.todos.id
    return (
      <div className="App-todo-container container-border-left">

        <div class="clearfix"></div>

        <div className="App-todo-item-shadow">
          <a href="/">
            <h3 className="container-border-left App-todo-items"><span className="App-todo-symbol">&ni;</span> { todo }</h3>
          </a>
        </div>

        <div className="App-todo-item-shadow">
          <a href="/">
            <h3 className="container-border-left App-todo-items"><span className="App-todo-symbol">&ni;</span> something</h3>
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

/* ======== things I don't yet want to delete ======== */

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

/*
<div className="App-todo-container container-border-left">
  <div class="clearfix"></div>
  <div className="App-todo-item-shadow">
    <a href="/">
      <Todos />
    </a>

    <a href="/">
      <h3 className="container-border-left App-todo-items"><span className="App-todo-symbol">&ni;</span> something</h3>
    </a>
  </div>
</div>



<div className="App-todo-container container-border-left">
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


*/
