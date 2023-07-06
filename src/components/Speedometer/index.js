import './index.css'

import {Component} from 'react'

class Speedometer extends Component {
  state = {speed: 0}

  changeSpeed = () => {
    //  this.setState(prevState => ({speed: prevState.speed + 10}))
    const {speed} = this.state
    if (speed < 200) {
      return this.setState(prevState => ({speed: prevState.speed + 10}))
    }
    return this.setState(prevState => ({speed: prevState.speed}))
  }

  applyBreak = () => {
    const {speed} = this.state
    if (speed === 0) {
      return this.setState(prevState => ({speed: prevState.speed}))
    }
    return this.setState(prevState => ({speed: prevState.speed - 10}))
  }

  render() {
    const {speed} = this.state
    return (
      <div className="main-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="heading">Speed is {speed}mph</h1>
        <p className="paragraph">Min limit is 0mph, Max limit is 200mph</p>
        <div>
          <button className="btn-1" type="button" onClick={this.changeSpeed}>
            Accelerate
          </button>
          <button className="btn-2" type="button" onClick={this.applyBreak}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
