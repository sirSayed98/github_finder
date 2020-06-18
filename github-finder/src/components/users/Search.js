import React, { useState } from 'react'
import PropTypes from 'prop-types'


const Search = ({ searchUsers, clearUsers, showClear, setAlert }) => {
    const [text, setText] = useState('');

    const onChange = (e) => setText(e.target.value);
    const onSubmit = (e) => {
        e.preventDefault();
        if (text === "")
            setAlert(' Please enter name or bio to get Profile', 'light');
        else {
            searchUsers(text);//prop up
            setText("");
        }

    }
    return (
        <div>
            <form onSubmit={onSubmit} className="form">
                <input name="text"
                    type="text" placeholder="Search Users....."
                    value={text}
                    onChange={onChange}
                />

                <input type="submit"
                    value="Serach"
                    className="btn btn-danger btn-block"
                />
                {
                    showClear &&
                    (<button className="btn btn-block btn-light"
                        onClick={clearUsers}>Clear</button>
                    )}

            </form>
        </div>
    )

}
Search.propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
}
export default Search
