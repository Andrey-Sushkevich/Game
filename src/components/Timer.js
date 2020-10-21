import React from 'react';
import { render } from 'react-dom';

export default class Timer extends React.Component{
    constructor(props){
        super(props);
        this.state={startDate: new Date(),ms:0};
        setInterval(() => {
            this.setInterval({ms: new Date()-this.state.startData});
        }, 1000);
    }
}


render(){
    return (
        <div className='timer'>
            {Timer}
        </div>
    )
}
