import React from 'react'
import PropTypes from 'prop-types'
const Navbar = (props) => {
    //@reserved attribute (you cannot change its name ) 
    return (
        <nav className="navbar bg-dark" >
            <h1>
                <i className={props.icon}>  {props.title}</i>
            </h1>
        </nav>

    )
}
Navbar.defaultProps = {
    title: "GitHub Finder",
    icon: "fab fa-github"
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default Navbar
