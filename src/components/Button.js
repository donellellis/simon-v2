import React, { Component } from 'react'

class Button extends Component{
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         isIlluminated: false,
    //         isSelected: false
    //     }
    //     // this.handleUserClick = this.handleUserClick.bind(this)
    //     // this.toggleIllumination = this.toggleIllumination.bind(this)
    //     // this.delayToggle = this.delayToggle.bind(this)
    // }

    // componentDidUpdate(){
    //     if(this.props.id === this.props.slectedNumber){
    //         console.log('this is the number ' + this.props.slectedNumber)
    //     }
    //     else{
    //         console.log('updated ' + this.props.slectedNumber )
    //     }
    // }
 
    // handleUserClick(){
    //     this.toggleIllumination()
    //     this.delayToggle()
    // }

    // toggleIllumination(){
    //     this.setState({
    //         isIlluminated: !this.state.isIlluminated
    //     })
    // }

    // delayToggle(){
    //     setTimeout(this.toggleIllumination, 500)
    // }

    render(){
        let isIlluminated = false
        if (this.props.id === this.props.selectedNumber){
            isIlluminated = true
        }
        // const isIlluminated = this.props.id === this.props.slectedNumber

        return(
            <div className={isIlluminated ? this.props.className + 'Illuminated': this.props.className} onClick={this.handleUserClick}>
            </div>
        )
    }
}

export default Button
