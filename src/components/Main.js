import React, { Component } from 'react'
import bodyImg from '../assets/sunRa.jpg'

class Main extends Component {
  render() {
    return (
      <main className="App-main content" id="main">
        <h1><span className="section-marker">&sect;</span> some dummy text</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat posuere nisi, ac fermentum nisl tempus eu. Nullam consectetur felis a leo vestibulum ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in dictum diam, eu laoreet lorem. Quisque tempus mauris quis rutrum mattis. In eleifend varius nisi, at laoreet ligula tincidunt id. Quisque feugiat odio laoreet dui vestibulum, in faucibus urna lacinia. Integer ac augue ante.</p>

        <figure className="App-main-figure">
          <img src={bodyImg} alt="Sun Ra" className="App-main-body-img" />
        <figcaption>The inimitable Sun Ra</figcaption>
        </figure>

        <p>Aliquam aliquet mauris ac nulla molestie, in dictum turpis commodo. Donec ornare urna nisi, eu sagittis ligula ultrices ut. Ut in libero ac turpis consectetur auctor sit amet vel mi. Quisque ultrices blandit sem auctor blandit. Integer aliquet nisi at semper tincidunt. Vestibulum neque felis, dictum congue ante a, suscipit imperdiet arcu. Quisque euismod, nulla efficitur tincidunt faucibus, eros lorem pellentesque metus, ac porttitor ligula justo non dolor. Aenean sapien felis, ultrices quis velit a, fringilla vulputate magna. Pellentesque imperdiet libero at semper posuere. Vestibulum volutpat leo vel nunc sagittis dapibus. Curabitur arcu augue, consectetur eget rhoncus in, iaculis non tellus. Praesent sagittis magna turpis, vel pellentesque orci eleifend eu.</p>

        <p>Suspendisse sagittis vulputate dolor, et finibus elit maximus ut. Aliquam vel ipsum at purus egestas euismod vitae id ligula. Ut facilisis elementum sodales. Donec id justo non libero volutpat mattis et nec leo. Phasellus iaculis facilisis molestie. Pellentesque lacus libero, fringilla vitae placerat at, lacinia eu lorem. Suspendisse iaculis mattis ex ac pellentesque.</p>

        <p>Quisque tellus eros, posuere vel libero a, hendrerit tincidunt nisi. Praesent augue leo, efficitur nec porta sit amet, commodo id nulla. Donec facilisis enim non pharetra pretium. Vivamus tempus elit libero. Integer consectetur ante interdum rutrum pulvinar. Integer sit amet elit cursus, auctor turpis quis, finibus sem. Aliquam tincidunt lorem sed sem faucibus, laoreet lacinia justo cursus. Suspendisse tincidunt et est a tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean luctus tortor vel velit scelerisque tempor. Vestibulum nibh odio, consequat vel ligula id, finibus finibus eros. Donec ornare ac metus vitae vehicula. Sed felis augue, facilisis vel odio in, imperdiet porttitor erat. Suspendisse potenti.</p>

        <p>Donec eros velit, mattis quis felis non, luctus hendrerit ante. Fusce blandit pellentesque erat, ut congue ligula rhoncus sed. Aliquam posuere nec odio vel vulputate. In id neque id lorem venenatis congue sit amet eu ipsum. Sed pharetra viverra vehicula. Donec efficitur aliquet tortor, nec efficitur sem. Donec eleifend accumsan ex ac molestie. Curabitur auctor varius venenatis. Donec interdum odio at arcu vehicula scelerisque.</p>
      </main>
    )
  }
}

export default Main
