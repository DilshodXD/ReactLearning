import { useEffect, useState } from "react";
import React  from 'react';
import axios from "axios";



function GetLesson() {
    
    const [users, setUsers] = useState([])
    
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            setUsers(res.data)
            console.log(res.data);
        })
        .catch(err => console.error(err))
    }, [])

    return ( 
        <div>
            {users.map(user => (
                <h1 key={user.id}>{user.name}</h1>
            ))}
        </div>
     );
}

export default GetLesson;