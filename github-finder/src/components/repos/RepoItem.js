import React from 'react';
import PropTypes from 'prop-types'
const RepoItem = ({ repo }) => {
    return (
        <div className="card">
            <h2>
                <a href={repo.html_url}>{repo.name}</a>
            </h2>
        </div>
    );
}

RepoItem.propTypes = {
    repo: PropTypes.object.isRequired
}
export default RepoItem;
