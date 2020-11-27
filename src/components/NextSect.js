import { Component } from 'react'

class NextSect extends Component {
  state = {
    chooseNextDiv: [
      {
        id: 'nextDiv',
        next: true,
        url: ''
      },
      {
        id: 'topDiv',
        next: false,
        url: '#header'
      }
    ]
  }

  render() {
    let chooseNext = this.state.chooseNextDiv
    let nextSect = 'a + a[href^="#"]'
    // const nextUrl = this.state.nextDiv.url
    const topUrl = this.state.topDiv.url

    return (
      chooseNext ? nextSect : nextSect = topUrl,
      nextSect
    )
  }
}

export default NextSect
