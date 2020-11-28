import { Component } from 'react'

import SectionDiv from './SectionDiv'
import SectionMark from './SectionMark'
import Todos from './Todos'

class TodoSect extends Component {
  render() {
    /*const title = this.state.todos.title*/
    return (
      <div className="outer-container container-outline">
        <div className="App-todo-header">
          <h1><SectionMark /> Todo</h1>
        </div>

        <div className="App-todo-list-container">
          <Todos />
        </div>

        <div className="App-todo-footer">
          <SectionDiv url={'#main'} />
        </div>

      </div>
    )
  }
}

export default TodoSect

/*
<div id="todos" classname="App-todo-container container-outline">
  <div className="App-todo-header">
    <h1><SectionMark /> todo list</h1>
  </div>

  <div className="App-todo-container">
    <div className="App-todo-items container-outline">
      <TodoItem />
    </div>
  </div>

  <div className="App-todo-footer">

  </div>

</div>

return (
  <div id="todos" className="App-todo-list container-outline">
    <h1><SectionMark /> Todo list</h1>
    <SectionDiv />
  </div>
)
*/
