import React, { Component } from 'react'

export class Search extends Component {
    state = {
        text: '',
    };
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });
    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.text)
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
                    <input type="submit" value="Serach" className="btn btn-dark btn-block" />
                </form>
            </div>
        )
    }
}

export default Search