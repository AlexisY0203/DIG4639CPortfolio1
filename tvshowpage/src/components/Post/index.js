import React from 'react'

export default class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
    }
    render() {
        return (
            <>
                <h4>{this.props.title}</h4>
                <div>{this.props.content}</div>
                <p><button onClick={() => {this.setState({counter: this.state.counter + 1})}}>Likes: {this.state.counter}</button></p>
            </>
        )
    }
}