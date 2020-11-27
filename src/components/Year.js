import { Component } from 'react'

class Year extends Component {
  render() {
    const currentYear = new Date().getFullYear()
    const year = (currentYear === 2020)
    let yearDivTxt = ''
    return (
      year ? yearDivTxt = currentYear : yearDivTxt = `2020-${currentYear}`,
      yearDivTxt
    )
  }
}

export default Year
