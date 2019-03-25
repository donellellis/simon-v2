import React, { Component } from 'react'
import Button from './Button'
import Modal from './Modal'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      sequence: [],
      userSequence: [],
      selectedNumber: null,
      currentLevel: 1,
      isHidden: true,
      messageTitle: '',
      message: ''
    }
  }

  hideModal = () => {
    this.setState({
      isHidden: true
    })
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
      // execute if user wins game
       if ( this.state.currentLevel === 5 && this.state.userSequence.toString() === this.state.sequence.toString()){
         this.setState({
           currentLevel: 1,
           isHidden: false,
           messageTitle: 'You win!',
           message: 'Click to play again'
         })
      }
      // execute if user wins level
      else if (this.state.userSequence.toString() === this.state.sequence.toString()) {
        this.setState({
          currentLevel: this.state.currentLevel + 1,
          isHidden: false,
          messageTitle: 'Match!',
          message: 'Click to advance to level ' + (this.state.currentLevel + 1)
        })
      }
      else {
        // execute if user looses
        this.setState({
          isHidden: false,
          messageTitle: 'Whomp!',
          message: 'Click to try again'
        })
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
          {!this.state.isHidden && <Modal
            messageTitle={this.state.messageTitle} 
            message={this.state.message} 
            currentLevel={this.state.currentLevel}
            playSequence={this.playSequence}
            hideModal={this.hideModal}/>}
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
