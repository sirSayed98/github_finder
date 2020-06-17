import React, { Component } from 'react'
import PropTypes from 'prop-types'
export class Navbar extends Component {
    //@reserved attribute (you cannot change its name ) 
    static defaultProps = {
        title: "GitHub Finder",
        icon: "fab fa-github"
    };
    //@reserved attribute (you cannot change its name ) 
    static propTypes = {
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
    }
    render() {
        return (
            <nav className="navbar bg-dark" >
                <h1>
                    <i className={this.props.icon}>  {this.props.title}</i>

                </h1>
            </nav>

        )
    }
}

export default Navbar
