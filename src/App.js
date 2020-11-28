
import React, { Component } from 'react'




import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import Nav from './components/Nav'
// import TodoSect from './components/TodoSect'
import Todos from './components/Todos'



class App extends Component {



  render() {

    return (
      <div className="outer-container">
        <Nav />
        <Header />
        <div className="outer-container container-outline">
          <div className="App-todo-list App-todo-container container-border-left">
            <Todos />
          </div>
        </div>
        <Main />
        <Footer />
      </div>
    )
  }
}

export default App

/*
<TodoSect />
*/
