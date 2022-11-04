import React from 'react';
import Users from './users.json'

const Json = () => {
    return (
        <div>
            {Users.map(post => {
                return(
                    <div className='user'>
                        <h1>Salom {post.name} {post.lastName} sizning yoshingiz {post.age}da</h1>
                        <h4>Telefon raqamingiz +{post.phone}</h4>
                        <br></br>
                        <br></br>
                    </div>
                )
            })}
        </div>
    )
}

export default Json;