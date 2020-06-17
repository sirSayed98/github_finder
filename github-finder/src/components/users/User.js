import React, { Component } from 'react'
import UserItem from './UserItem'
class User extends Component {
    userStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gridGap: '2rem'
    }

    render() {

        return (
            <div style={this.userStyle}>
                {this.props.users.map(user => (
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
        )
    }
}

export default User
