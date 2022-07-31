import React from 'react';
import './Repository.css';

class Repository extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            repository: props.repository,
            rank: props.rank
        };
    }
    
    render() {
        const { repository, rank } = this.state;
        return (
            <div className="repository">
                <span>#{rank+1}</span>
                <a className="repoLink" href={repository.html_url}>{repository.name}</a>
                <span>⭐ {repository.stargazers_count}</span>
            </div>
        );
    }
}

export { Repository };
