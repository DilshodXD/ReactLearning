import React from 'react';

export default class lifecycle extends React.Component {
    constructor(){
        super();
        console.log('constructor is working');
    }
    componentDidMount(){
        console.log("componentDidMount is working");
    }
    componentWillMount(){
        console.log("componentWillMount is working");
    }
    render() {
        console.log("Render is working");
        return (
            <div></div>
        )
    }
};
