import React from 'react';
import '../App.css';

export default class Welcome extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
    }

    render(){
        return (
            <div className='welcome'>
                {Welcome}
            </div>
        )
    }
}