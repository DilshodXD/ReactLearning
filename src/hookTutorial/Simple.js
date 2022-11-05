import React, { useState } from 'react';

export default function Simple() {

    const [count, SetCount] = useState(0);

    function increment() {
        SetCount(count + 1)
    }
    function decrment() {
        SetCount(count - 1)
    }

    return (
        <div>
            <button onClick={increment}>+</button>
            <span>{count}</span>
            <button onClick={decrment}>-</button>
        </div>
    );
}