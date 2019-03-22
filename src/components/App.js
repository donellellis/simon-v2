import React, { Component } from 'react'
import ButtonTopLeft from './ButtonTopLeft'
import ButtonTopRight from './ButtonTopRight'
import ButtonBottomLeft from './ButtonBottomLeft'
import ButtonBottomRight from './ButtonBottomRight'

class App extends Component {
  constructor(){
    super()
    this.state = {
        isIlluminated: false
    }
    this.receiveUserClick = this.receiveUserClick.bind(this)
    this.toggleIllumination = this.toggleIllumination.bind(this)
    this.delayToggle = this.delayToggle.bind(this)
  }

  receiveUserClick(){
      this.toggleIllumination()
      this.delayToggle()
  }

  toggleIllumination(){
      this.setState({
          isIlluminated: !this.state.isIlluminated
      })
      
  }

  delayToggle(){
      setTimeout(this.toggleIllumination, 500)
  }
  
  render() {
    return (
      <div className='app'>
        <header>
          <h1>Simon</h1>
        </header>
        <main>
          <ButtonTopLeft delayToggle={this.delayToggle} toggleIllumination={this.toggleIllumination} receiveUserClick={this.receiveUserClick} isIlluminated={this.state.isIlluminated}/>
          <ButtonTopRight delayToggle={this.delayToggle} toggleIllumination={this.toggleIllumination} receiveUserClick={this.receiveUserClick} isIlluminated={this.state.isIlluminated}/>
          <ButtonBottomLeft delayToggle={this.delayToggle} toggleIllumination={this.toggleIllumination} receiveUserClick={this.receiveUserClick} isIlluminated={this.state.isIlluminated}/>
          <ButtonBottomRight delayToggle={this.delayToggle} toggleIllumination={this.toggleIllumination} receiveUserClick={this.receiveUserClick} isIlluminated={this.state.isIlluminated}/>
        </main>
        <nav>
          <button className="buttonNav fas fa-play"></button>
        </nav>
      </div>
    );
  }
}

export default App;
