import React from 'react';
import React, { Component } from 'react'

class Timer extends Component {

constructor(props) {
    super(props)
    this.state = {
        stop: false,
        numb: 0
    }
    this.startTimer = this.startTimer.bind(this)
    this.stopTimer = this.stopTimer.bind(this)
}

startTimer() {
    let timer = setInterval(() => {
        this.setState({numb: this.state.numb + 1})
    }, 1000)
  
   this.state.stop ? this.stopTimer(timer) : null
  }
stopTimer (this) {
    this.setState({stop: !this.state.stop})
    clearInterval(this.timer)
}

render() {
  return (

    <div className='timer'>
        <div className="timerNumber">{this.state.numb}</div>
        <div className="flex">
            <input onClick={this.startTimer} value='GO' type="button"/>
            <input onClick={this.stopTimer} value='STOP' type="button"/></div>
    </div>
  );
}

}