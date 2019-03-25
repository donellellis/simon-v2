import React, { Component } from 'react'
import Button from './Button'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      sequence: [],
      userSequence: [],
      selectedNumber: null,
      currentLevel: 1
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
    }, () => this.addButtonToSequence())
  }

  addButtonToSequence = () => {
    if (this.state.userSequence.length < this.state.sequence.length - 1){
      this.state.userSequence.push(this.state.selectedNumber)
    }
    else if (this.state.userSequence.length === this.state.sequence.length - 1){
      this.state.userSequence.push(this.state.selectedNumber)
      this.checkForMatch()
    }
    this.setButtonDelay()
  }

  checkForMatch = () => {
    setTimeout(() => {
       if ( this.state.currentLevel === 5 && this.state.userSequence.toString() === this.state.sequence.toString()){
         this.setState({
           currentLevel: 1
         }, () => {
           alert('you win! all levels have been completed')
         })
      }
      else if (this.state.userSequence.toString() === this.state.sequence.toString()) {
        this.setState({
          currentLevel: this.state.currentLevel + 1
        }, () => {
          alert('you found a match! advance to the next level: ' + this.state.currentLevel)
          this.playSequence()
        })
        
      }
      else {
        alert('whomp! click to try again')
        this.playSequence()
      }
    }
    , 1000)
  }

  resetUserSequence = () => {
    this.setState({
      userSequence: []
    })
  }

  playSequence = () => {
    // selects 3 random numbers between 0 and 4 and adds to sequence
    let sequenceLevel = []
    for (let i = 0; i < this.state.currentLevel + 2; i++){
      sequenceLevel.push(Math.floor((Math.random() * 4) + 0))
    }
    this.setState({
      sequence: sequenceLevel
    }, () => this.setSequenceDelay(this.resetUserSequence))
  }

  setSequenceDelay = (callback) => {
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
    callback()
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
          <h1 className='buttonNav'>{this.state.currentLevel}</h1>
          <button className='buttonNav fas fa-play' onClick={this.playSequence}/>
          <a className='buttonNav' href='https://github.com/donellellis/simon-v2' target='blank'>?</a>
        </nav>
      </div>
    );
  }
}

export default App;
