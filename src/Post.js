import { Avatar } from '@material-ui/core'
import React from 'react'
import './Post.css'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

function Post({ displayName, username,verified, text, image, avatar }) {

    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src="https://pbs.twimg.com/profile_images/1248093914667466753/IU4U84tn_400x400.jpg" />
            </div>
            <div className="post__body ">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            Ajay Chauhan{" "}<span className="post__headerSpecial"><VerifiedUserIcon className="post__badge" />_Ajay__Chauhan</span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>Builds the app for production to the build folder. Ajay Chauhan Here rocking Style</p>
                    </div>
                </div>
                <img src="https://pbs.twimg.com/profile_images/1248093914667466753/IU4U84tn_400x400.jpg" alt=" " />
                <div className="post__footer">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <RepeatIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                    <PublishIcon fontSize="small" />
                </div>
            </div>

        </div>
    )
}

export default Post
