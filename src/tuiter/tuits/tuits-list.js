import React, {useEffect} from "react";
import {useDispatch, useSelector}
    from "react-redux";
//import PostSummaryList from "../post-summary-list";
import "./index.css";

import {findTuitsThunk}
    from "../../services/tuits-thunks";

//import PostSummaryItem from "../post-summary-list/post-summary-item";
import TuitItem from "./tuit-item";
//import HomeComponent from "../home";
const TuitsList = () => {
    const {tuits, loading} = useSelector(
        state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])

    return(
        <>
            <body>
            <ul className="list-group">
                {
                    loading &&
                    <li className="list-group-item">
                        Loading...
                    </li>
                }

                {
                    <TuitItem tuit={tuits}/>
                }
            </ul>
            </body>
        </>
    );
};
export default TuitsList;


