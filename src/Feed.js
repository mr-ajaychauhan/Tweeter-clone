import React from 'react'
import './Feed.css' 
import Tweetbox from './Tweetbox'
import Post from './Post';

function Feed() {
    return (
        <div className="feed">
            <div className="feed__header">
                {/*header  */}
            <h2>Home</h2>
            </div>
            
            

            {/* TweerBox */}
            <Tweetbox />


            {/* Post */}
            <Post />  
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />



            {/* Post */}
            {/* Post */}
            {/* Post */}
            {/* Post */}
            {/* Post */}

        </div>
    )
}

export default Feed;
