import React, { Component } from 'react'
//import PropTypes from 'prop-types'

export class User extends Component {
    // static propTypes = {

    // }
    componentDidMount() {
        this.props.getUser(this.props.match.params.login);
    }

    render() {
        const {
            name, avatar_url, location, bio, blog, login, html_url, followers, following, public_repos, public_gists, hireable
        } = this.props.user
        return (
            <div>sfsd
                <p>{name}
                    {avatar_url},
            {location},
            {bio},
            {blog},
            {login},
            {html_url},
            {followers},
            {following},
            {public_repos},
            {public_gists},
            {hireable}</p>
            </div>
        )
    }
}

export default User
