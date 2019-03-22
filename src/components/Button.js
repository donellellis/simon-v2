import React, { Component } from 'react'

class Button extends Component{
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


    render(){
        return(
            <div className={this.state.isIlluminated ? this.props.className + 'Illuminated': this.props.className} onClick={this.receiveUserClick}>
            </div>
        )
    }
}

export default Button
