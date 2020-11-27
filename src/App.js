
import React, { Component } from 'react'
// import ReactDOM from 'react-dom'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faBars, faCoffee } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import Nav from './components/Nav'
import TodoSect from './components/TodoSect'

library.add(fab, faBars, faCoffee)

class App extends Component {

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
      <div className="container">
        <Nav />
        <Header />
      
        <TodoSect />

        <Main />
        <Footer />
      </div>
    )
  }
}

export default App
