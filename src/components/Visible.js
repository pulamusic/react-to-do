import { Component } from 'react'
import bodyImg from '../assets/sunRa.jpg'

class Visible extends Component {

  hideDiv = () => {
    /* When opacity = 0, remove `.App-main-visible` and add `.App-main-hidden` */
  }
  
  render() {
    return (
      <figure className="App-main-figure">
        <img src={bodyImg} alt="Sun Ra again" className="App-main-body-img-2" />
        <figcaption>hiddenRa</figcaption>
      </figure>
    )
  }
}

export default Visible
