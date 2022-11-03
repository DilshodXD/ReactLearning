import React from 'react';
import "./styleUsers.css"
import axios from 'axios';

export default class api extends React.Component {
    state = {
        user: []
    }

    // componentDidMount() {
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //         .then((res) => res.json())
    //         .then(data => { 
    //             console.log(data) 
    //             this.setState({user: data})
    //         })
    // }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                const user = res.data
                this.setState({ user })
                // console.log(res);
                // console.log(user);
            })
    }


    render() {
        return (
            <div className='all'>
                {this.state.user.map(users => (
                    <div className='users' key={users.id}>
                        <h3>Hello {users.name}</h3>
                        <p>usrname: {users.username}</p>
                    </div>
                ))}
            </div>
        )
    }
}