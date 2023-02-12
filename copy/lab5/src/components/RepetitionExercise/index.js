import React from "react"

//Some code used from Module video "React: Class Component State"

export default class Repetition extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
    }
    render() {
        return (
            <>
                <h1>{`Exercise: ` + this.props.name}</h1>
                <p>Count: {this.state.counter}</p>
                <p>
                    <button onClick={() => {this.setState({counter: this.state.counter + 1})}}>Add</button>
                    <button onClick={() => {this.setState({counter: 0})}}>Reset</button>
                </p>
            </>
        )
    }
}

/*
Should maintain state and render each of the following:
    Show the name of the exercise (text only)
    Allow a user to click on a element to increase a counter of repetitions, laps, or another measurement
    Allow a user to click on an element to reset the value of the counter
*/