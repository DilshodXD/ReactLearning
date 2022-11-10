import React, { useState } from 'react';
function LocalStorage() {
    
    const [item, setItem1] = useState('')
    const [call, setItem2] = useState('')

    function addItem1(){
        localStorage.setItem("key", item )
    }
    function addItem2(){
        localStorage.setItem("Key", call )
    }
    function removeItem(){
        localStorage.removeItem("key")
    }
    function clearItem(){
        localStorage.clear()
    }

    return ( 
        <div>
            <input type="text" placeholder='Write text' value={item} onChange={(e)=> setItem1(e.target.value)} />
            <button onClick={addItem1}>Add item</button>
            <button onClick={removeItem}>Remove item</button>
            <br/>
            <input type="text" placeholder='Write text' value={call} onChange={(e)=> setItem2(e.target.value)} />
            <button onClick={addItem2}>Add item</button>
            <br/>
            <button onClick={clearItem}>Clear item</button>
            <br/>
            {localStorage.getItem("key") && (
                <div>
                    <p>{localStorage.getItem('key')}</p>
                    <p>{localStorage.getItem('key')}</p>
                </div>
            )}
        </div>
     );
}

export default LocalStorage;