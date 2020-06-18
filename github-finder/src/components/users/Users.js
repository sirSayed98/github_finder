import React from 'react'
import UserItem from './UserItem'
import Spinner from '../layout/Spinner'
const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4,1fr)',
    gridGap: '2rem'
}

const Users = (props) => {

    if (props.loading) {
        return <Spinner />
    }
    else {
        return (
            <div style={userStyle}>
                {props.users.map(user => (
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
        )
    }


}

export default Users
