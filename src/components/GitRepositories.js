import React from 'react';
import { Repository } from './Repository';
import './GitRepositories.css';

class GitRepositories extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            repositories: null,
            message: "Please press a button to fetch repositories"
        };
    }

    getAllRepositories = () => {
        this.setState({ message: "Fetching all GitHub repositories...", repositories: null})
        this.fetchRepositories("all")
    }

    getFuturiceRepositories = () => {
        this.setState({ message: "Fetching Futurice repositories...", repositories: null})
        this.fetchRepositories("Futurice")
    }

    fetchRepositories = (organization) => {
        let orgFilter = ""
        if (organization !== "all")
            orgFilter = "%20org:" + organization
        this.setState( { message: "Fetching " + organization + " repositories...", repositories: null })
        fetch("https://api.github.com/search/repositories?q=stars:%3E1" + orgFilter + "&sort=stars")
            .then(response => {
                if (response.status === 403)
                    throw new Error("Error 403: Too many requests to GitHub API. Please try again after a while.")
                return response.json()
            })
            .then(data => { 
                const repositories = data.items.map((repository, index) => {
                    return (
                            <Repository key={index} rank={index} repository={repository} />    
                    )
                })
                this.setState({ message: "Finished fetching " + organization + " repositories!", repositories: repositories })
            })
            .catch(error => { this.setState({ message: error.message, repositories: null })})
    }
    
    render() {
        const { repositories, message } = this.state;

        return (
            <div className="main">
                <h1>⭐ GitHub Top Repositories! ⭐</h1>
                <div className="buttons">
                    <button onClick={this.getAllRepositories}>All repos</button>
                    <button onClick={this.getFuturiceRepositories}>Futurice repos</button>
                </div>
                <div className="message">
                    {message}
                </div>
                <div className="repositories">
                    {repositories}
                </div>
            </div>
        );
    }
}

export { GitRepositories };
