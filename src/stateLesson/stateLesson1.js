import React from 'react';

class Lesson1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
    }
    incrementCount() {
        this.setState({
            count: this.state.count + 1
        })
    }
    decrementCount() {
        this.setState({
            count: this.state.count - 1
        })
    }
    render() {
        return (
            <div>
                <button onClick={(e) => this.incrementCount(e)}>+</button>
                <h1>{this.state.count}</h1>
                <button onClick={(e) => this.decrementCount(e)}>-</button>
            </div>
        );
    }
}

export default Lesson1;