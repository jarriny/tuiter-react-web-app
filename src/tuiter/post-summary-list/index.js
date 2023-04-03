import React from "react";
import PostSummaryItem
    from "./post-summary-item";
//import {useSelector} from "react-redux";

const PostSummaryList = () => {
    return(
        <ul className="list-group">
            {
                //I moved the map to post-summary-item because when I used map here, post would be passed as undefined
                //I checked with the TA that my map was correct, it was post that was not correct
                <PostSummaryItem/>

            }
        </ul>
    );
};
export default PostSummaryList;

