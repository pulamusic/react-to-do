const currentYear = new Date().getFullYear()
const year = (currentYear === 2020)
let yearDivTxt = document.getElementById('yearTag').innerHTML

function copyYear(year) {
  return( year ? yearDivTxt = currentYear : yearDivTxt = "2020-" + currentYear )
}

const Year = copyYear()

export default Year
