import React, { Component } from 'react'

class ButtonBottomLeft extends Component{


    render(){
        return(
            <div className={this.props.isIlluminated ? 'buttonBottomLeftIlluminated' : 'buttonBottomLeft'} onClick={this.props.receiveUserClick}>
            </div>
        )
    }
}

export default ButtonBottomLeft
