import React, { Component } from 'react'
import PropTypes from 'prop-types'
export class Search extends Component {
    state = {
        text: '',
    };
    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        setAlert: PropTypes.func.isRequired
    }
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });
    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.text === "")
            this.props.setAlert(' Please enter name or bio to get Profile', 'light');
        else {
            this.props.searchUsers(this.state.text);//prop up
            this.setState({ text: "" })
        }

    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input name="text"
                        type="text" placeholder="Search Users....."
                        value={this.state.text}
                        onChange={this.onChange}
                    />

                    <input type="submit"
                        value="Serach"
                        className="btn btn-dark btn-block"
                    />
                    {
                        this.props.showClear &&
                        (<button className="btn btn-block btn-light"
                            onClick={this.props.clearUsers}>Clear</button>
                        )}

                </form>
            </div>
        )
    }
}

export default Search
