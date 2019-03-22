import React, { Component } from 'react'
import Button from './Button'

class App extends Component {
  
  render() {
    return (
      <div className='app'>
        <header>
          <h1>Simon</h1>
        </header>
        <main>
          <Button className={'buttonTopLeft'}/>
          <Button className={'buttonTopRight'}/>
          <Button className={'buttonBottomLeft'}/>
          <Button className={'buttonBottomRight'}/>
        </main>
        <nav>
          <button className='buttonNav fas fa-play'></button>
        </nav>
      </div>
    );
  }
}

export default App;
