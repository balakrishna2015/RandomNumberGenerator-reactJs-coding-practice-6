import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onClickGenerateRandom = () => {
    const newRandomNumber = this.getRandomNumber()
    console.log(newRandomNumber)
    this.setState({randomNumber: newRandomNumber})
  }

  render() {
    const {randomNumber} = this.state

    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            className="button"
            type="button"
            onClick={this.onClickGenerateRandom}
          >
            Generate
          </button>
          <p className="random">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
