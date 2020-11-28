import { Component } from 'react'

class SectionDiv extends Component {
  render() {
    return (
      <div className="section-divider-div">
        <a id="next" href="{{ url }}">
          <h2 className="section-divider">&mdash; &infin;&exist; || &isin;&empty; &mdash;</h2>
        </a>
      <h2 className="section-divider">&darr;</h2>
      </div>

    )
  }
}

export default SectionDiv
