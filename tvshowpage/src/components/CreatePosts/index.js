import React from 'react'
import Post from '../Post'

let contentArray = [
    {title:"First Text", content:"One", index:1},
    {title:"Second Text", content:"Two", index:2},
    {title:"Thrid Text", content:"Three", index:3},
    {title:"First Pic", content:"One", index:4},
    {title:"Second Pic", content:"Twp", index:5},
    {title:"Third Pic", content:"Three", index:6}
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
        return element
    }
}