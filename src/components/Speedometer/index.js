import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  accelerate = () => {
    this.setState(prevState => ({
      speed: Math.min(prevState.speed + 10, 200),
    }))
  }

  applyBrake = () => {
    this.setState(prevState => ({
      speed: Math.max(prevState.speed - 10, 0),
    }))
  }

  render() {
    const {speed} = this.state
    return (
      <div className="app-container">
        <div className="container">
          <h1 className="main-head">SPEEDOMETER</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            className="image"
            alt="speedometer"
          />
          <h1 className="heading">Speed is {speed}mph</h1>
          <p className="para">Min limit is 0mph, Max limit is 200mph</p>
          <div className="buttons-container">
            <button
              className="accelerate button"
              onClick={this.accelerate}
              type="button"
            >
              Accelerate
            </button>
            <button
              className="brake button"
              onClick={this.applyBrake}
              type="button"
            >
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
