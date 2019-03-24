import React, { Component } from 'react'
import Button from './Button'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      sequence: [],
      selectedNumber: null
    }
  }

  setDelay = () => {
    for (let i = 0; i < this.state.sequence.length; i++){
      //sets time interval for button illumination
      setTimeout(() => this.setState({
        selectedNumber: this.state.sequence[i]
      }), (500 + (1000 * i)))

      //sets time interval for delay between button illumination
      setTimeout(() => this.setState({
        selectedNumber: null
      }), 1000 + (1000 * i) )
    }
  }

 
  playSequence = () => {
    // selects 4 random numbers between 0 and 4 and adds to sequence
    let sequenceLevelOne = []
    for (let i = 0; i < 4; i++){
      sequenceLevelOne.push(Math.floor((Math.random() * 4) + 0))
    }
    this.setState({
      sequence: sequenceLevelOne
    }, () => this.setDelay())
  }

  render() {

    return (
      <div className='app'>
        <header>
          <h1>Simon</h1>
        </header>
        <main>
          <Button 
            id={0}
            selectedNumber={this.state.selectedNumber}
            className={'buttonTopLeft'}
          />
          <Button
            id={1}
            selectedNumber={this.state.selectedNumber}
            className={'buttonTopRight'}
          />
          <Button
            id={2}
            selectedNumber={this.state.selectedNumber}
            className={'buttonBottomLeft'}
          />
          <Button
            id={3}
            selectedNumber={this.state.selectedNumber}
            className={'buttonBottomRight'}
          />
        </main>
        <nav>
          <button className='buttonNav fas fa-play' onClick={this.playSequence}/>
        </nav>
      </div>
    );
  }
}

export default App;
