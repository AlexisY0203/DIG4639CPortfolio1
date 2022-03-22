import React from 'react'
import Post from '../Post'

let contentArray = [
    {title:'Hard Times', content:"The economy stinks, bees are dying, and movies are pretty much all sequels now. -Schmidt", index:1},
    {title:"Self Care", content:"I am not a successful adult. I don't eat vegetables and/or take care of myself. -Nick Miller", index:2},
    {title:"Dance Party", content:<img src='/img/dancing.gif' alt='Cast of New Girl Dancing' height='300px' />, index:3},
    {title:"Sad Times", content:<img src='/img/sadjess.jpg' alt='Jessica Day Crying' height='300px' />, index:4}
]

export default class CreatePosts extends React.Component {
    render() {
        let element = contentArray.map(post =>
            <Post
                key={post.index}
                title={post.title}
                content={post.content}>
            </Post>
        )
        return (
            <>
            <h1>Online Posts and Quotes</h1>
            {element}
            </>
        )
    }
}