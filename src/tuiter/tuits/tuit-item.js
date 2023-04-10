import React from "react";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import WhoToFollowListItem from "../who-to-follow-list/who-to-follow-list-item";
import Liked from "./Liked";
import {deleteTuitThunk} from "../../services/tuits-thunks";
const TuitItem = (
    {
        tuit
    }
) => {

    //const postsArray = useSelector(state => state.tuits)
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    };

    return(
        <ul className="list-group">
            {
                tuit.map(post => <li className="list-group-item">
                        <div className="row">
                            <div className="col-2">
                                <img className="rounded-circle" height={45} width = {45} src={`/images/${post.image}`}/>
                            </div>

                            <div className="col-10">
                                <i className="bi bi-x-lg float-end"
                                   onClick={() => deleteTuitHandler(post._id)}></i>
                                <div>{post.userName} {post.handle} . {post.time}</div>
                                <div className="fw-bolder">{post.topic}</div>
                                <div>{post.tuit}</div>
                                <div className="row">
                                    <div className="col-3">
                                        <i className="bi bi-chat pt-1"></i>
                                        {post.replies}
                                    </div>
                                    <div className="col-3">
                                        <i className="bi bi-arrow-repeat pt-1"></i>
                                        {post.retuits}
                                    </div>
                                    <div className="col-3">
                                        <i className="bi bi-heart pt-1"></i>
                                        {post.likes}
                                    </div>
                                    <div className="col-3">
                                        <i className="bi bi-share pt-1"></i>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </li>
                )
            }
        </ul>



    );
};
export default TuitItem;