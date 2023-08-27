import {Component} from 'react'
import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  onDelete = id => {
    if (id === 1) {
      this.setState(prevState => ({amount: prevState.amount - 50}))
    } else if (id === 2) {
      this.setState(prevState => ({amount: prevState.amount - 100}))
    } else if (id === 3) {
      this.setState(prevState => ({amount: prevState.amount - 200}))
    } else if (id === 4) {
      this.setState(prevState => ({amount: prevState.amount - 500}))
    }

    // {
    //   id === 1
    //     ? this.setState(prevState => ({amount: prevState.amount - 50}))
    //     : amount
    // }
  }

  render() {
    const {amount} = this.state
    const {denominationsList} = this.props

    return (
      <div className="bg-Main">
        <div className="sub-bg">
          {/* //profie */}
          <div className="profile-Bg">
            <div className="bg">
              <p className="Letr">S</p>
            </div>
            <p className="Name">Sarah william</p>
          </div>
          {/* //blance */}
          <div className="BalanceCont">
            <p className="Para">Your Balance</p>
            <div>
              <p className="Name">{amount}</p>
              <p className="Letr">in Rupees</p>
            </div>
          </div>
          {/* //withdraw */}
          <div className="withdraw_cN">
            <p className="Para">WithDraw</p>
            <p className="Para">Choose sum (in rupees)</p>
            <ul>
              {denominationsList.map(eachOne => (
                <DenominationItem
                  key={eachOne.id}
                  denominationsList={eachOne}
                  onDelete={this.onDelete}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
