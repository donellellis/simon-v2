import React, { Component } from 'react'

class Button extends Component{

    handleSetSelected = () => {
        this.props.handleUserClick(
            this.props.id
        )
    }

    render(){
        let isIlluminated = false
        if (this.props.id === this.props.selectedNumber){
            isIlluminated = true
        }
        
        // const isIlluminated = this.props.id === this.props.slectedNumber

        return(
            <div className={isIlluminated ? this.props.className + 'Illuminated': this.props.className} onClick={this.handleSetSelected}>
            </div>
        )
    }
}

export default Button
