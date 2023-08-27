// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationsList, onDelete} = props
  const {value, id} = denominationsList

  const withDraw = () => {
    onDelete(id)
  }

  return (
    <button type="button" className="btn" onClick={withDraw}>
      {value}
    </button>
  )
}

export default DenominationItem
