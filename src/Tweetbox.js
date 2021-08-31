import React from 'react'
import './Tweetbox.css'
import { Avatar, Button } from '@material-ui/core'

function Tweetbox() {
    return (
        <div className="Tweetbox">
            <form>
                <div className="Tweetbox__input">
                    <Avatar src="https://pbs.twimg.com/profile_images/1248093914667466753/IU4U84tn_400x400.jpg"></Avatar>
                    <input type="text" placeholder="What's happening?" />
                </div>
                <input className="Tweetbox__imageInput" placeholder="Optional : Enter image URL"type="text" />


                <Button className="Tweetbox__tweetButton">Tweet</Button>

            </form>
        </div>
    )
}

export default Tweetbox
