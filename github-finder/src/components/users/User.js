import React, { Component } from 'react'
import UserItem from './UserItem'
class User extends Component {
    userStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gridGap: '2rem'
    }

    state = {
        users: [
            {
                login: "mojombo",
                id: 1,
                avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
                html_url: "https://github.com/mojombo",
            },
            {
                login: "defunkt",
                id: 2,
                avatar_url: "https://avatars0.githubusercontent.com/u/2?v=4",
                html_url: "https://github.com/defunkt",
            },
            {
                login: "pjhyett",
                id: 3,
                avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4",
                html_url: "https://github.com/pjhyett",
            }
        ]
    }
    render() {

        return (
            <div style={this.userStyle}>
                {this.state.users.map(user => (
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
        )
    }
}

export default User
