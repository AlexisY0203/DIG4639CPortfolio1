import React from "react"

//Some code used from "Workshop 8 Zoom Video"

export default class Duration extends React.Component {
    constructor(props) {
        super(props)
        this.state = {time: 0}
    }
    render() {
        const startTime = () => { this.myTime = 
            setInterval(() => this.setState({time: this.state.time + 1}), 1000)
        }
        const stopTime = () => {
            clearInterval(this.myTime);
            this.setState({time: 0})
        }
        let minutes = Math.floor(this.state.time / 60)
        let seconds = this.state.time - minutes*60
      return (
            <>
                <h1>{`Exercise: ` + this.props.name}</h1>
                <p>Timer: {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}</p>
                <p>
                    <button onClick={startTime}>Start</button>
                    <button onClick={stopTime}>Stop</button>
                </p>
            </>
      )  
    }
}

/*
Should maintain state and render each of the following:
    Show the name of the exercise (text only)
    Allow a user to click on an element to start a timer
    Allow a user to click on an element to reset (or stop) the timer
    Must pad digits so that single digits have a 0 in front so 01 instead of 1
*/