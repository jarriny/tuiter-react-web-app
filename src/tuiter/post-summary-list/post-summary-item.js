import React from "react";

import {useSelector} from "react-redux";
const PostSummaryItem = (
    {
        //post// = { "_id": 567, "topic": "Space", "userName": "SpaceX",
            //"title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            //"time": "2h",   "image": "tesla.jpg" }
    }
) => {

    const postsArray = useSelector(state => state.tuits)
    return(
        <ul className="list-group">
            {
                postsArray.map(post => <li className="list-group-item">
                        <div className="row">
                            <div className="col-10">
                                <div>{post.userName} . {post.time}</div>
                                <div className="fw-bolder">{post.topic}</div>
                                <div>{post.title}</div>
                            </div>
                            <div className="col-2">
                                <img width={70} className="float-end rounded-3" src={`/images/${post.image}`}/>
                            </div>
                        </div>
                    </li>
                )
            }
        </ul>



    );
};
export default PostSummaryItem;