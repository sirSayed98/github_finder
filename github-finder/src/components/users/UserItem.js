import React, { Component } from 'react'

class UserItem extends Component {
    state = {
        id: 1,
        avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
        login: "mojombo",
        html_url: "https://github.com/mojombo",
    }
    render() {
        const { avatar_url, login, html_url } = this.state;
        return (
            <div className="card text-center">
                <img alt="" src={avatar_url} className="round-img" style={{ width: '70px' }} />
                <h3>{login}</h3>
                <div>
                <a href={html_url} className="btn btn-dark btn-sm my-1">More</a>
                </div>
            </div>

        )
    }
}

export default UserItem
