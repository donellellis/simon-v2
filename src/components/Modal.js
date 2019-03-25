import React, { Component } from 'react'

class Modal extends Component{

    handleClick = () => {
        this.props.hideModal() 
        this.props.playSequence()
    }
    render(){
        return(
            <div className='modal' onClick={this.handleClick}>
                <h1>{this.props.messageTitle}</h1>
                <h2>{this.props.message}</h2>
            </div>
        )
    }
}

export default Modal