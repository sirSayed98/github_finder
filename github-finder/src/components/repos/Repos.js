import React from 'react';
import RepoItem from './RepoItem'
import PropTypes from 'prop-types'
const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap: '1rem'
}

const Repos = ({ repos }) => {

    if (repos.length > 0)
        return <div className="container">
            <h1 className="my-3 large">Public Repos</h1>
            <hr />
            <div style={userStyle}>
                {repos.map(repo => <RepoItem repo={repo} key={repo.id} />)}
            </div>
        </div >
    else {
        return <h1 className="my-3 large text-center">No available Public Repos</h1>
    }

}
Repos.propTypes = {
    repos: PropTypes.array.isRequired,
}
export default Repos;
