import React from 'react'
import './Widgets.css'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed';
import SearchIcon from '@material-ui/icons/Search';


function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input type="text" placeholder="Search Twitter " />
            </div>
            <div className="widgets__wigetContainer">
                <h2>What's happening</h2>
                <TwitterTweetEmbed tweetId={"1432402739183620102"} />

                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="_Ajay__Chauhan"
                    options={{ height: 400 }}
                />

                <TwitterShareButton url={"https://facebook.com/cleverprogrammer"} options={{ text: "#reactjs is awesome", via: "Ajay Chauhan" }} />

            </div>
        </div>
    )
}

export default Widgets
