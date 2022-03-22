import React from 'react'
import cast from '../img/newGirlPic.jpeg';

export default class ShortBio extends React.Component {
    render() {
        return (
        <>
            <h1>My favorite show is.....</h1>
            <h2>{this.props.data.show}</h2>
            <img src={cast} alt="New Girl Cast" width="50%"></img>
            <p>{this.props.data.show} is an American sitcom from {this.props.data.year} with {this.props.data.seasons} seasons.</p>
            <p>My favorite character from it is {this.props.data.mainCharacter}.</p>
        </>
        )
    }
}