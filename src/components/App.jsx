

import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: 'hard',
            hasLoaded: false
        };

    }

    componentDidMount() {
        console.log('did mount');
        this.setState({hasLoaded: true});
    }

    
    render() {

        if (this.state.hasLoaded === true) {
            return (
                <React.Fragment>
                    <h1>Hi, {this.props.name}!</h1>
                    <h1>Guess what? React is  {this.state.text}!</h1>
                    <input
                        value={this.state.text}
                        onChange={(event) => { this.setState({ text: event.target.value }) }} />
                    <button
                        value={this.state.hasLoaded}
                        onClick={(event) => { this.setState({ hasLoaded: false }) }}
                    >Reset</button>
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
                    <h1>Loading...</h1>
                    <button
                        value={this.state.hasLoaded}
                        onClick={(event) => { this.setState({ hasLoaded: true }) }}
                    >Try Again?</button>
                </React.Fragment>
            )

        }
    }

}

export default App;


