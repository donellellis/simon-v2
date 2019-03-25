import React, { Component } from 'react'
import Button from './Button'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      sequence: [],
      userSequence: [],
      selectedNumber: null
    }
  }

  setButtonDelay = () => {
    setTimeout(() => this.setState({
      selectedNumber: null
    }), 500)
  }

  handleUserClick = (id) => {
    this.setState({
      selectedNumber: id
    }, () => this.setButtonDelay())
  }

  setSequenceDelay = () => {
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
    }, () => this.setSequenceDelay())
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
            handleUserClick={this.handleUserClick}
          />
          <Button
            id={1}
            selectedNumber={this.state.selectedNumber}
            className={'buttonTopRight'}
            handleUserClick={this.handleUserClick}
          />
          <Button
            id={2}
            selectedNumber={this.state.selectedNumber}
            className={'buttonBottomLeft'}
            handleUserClick={this.handleUserClick}
          />
          <Button
            id={3}
            selectedNumber={this.state.selectedNumber}
            className={'buttonBottomRight'}
            handleUserClick={this.handleUserClick}
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
