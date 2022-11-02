import React from 'react';

function component1(props) {
    return (
        <div>
            <h3>Hello {props.name}</h3>
            <h4>He is {props.age} years old</h4>
        </div>
    );
}

export default component1;