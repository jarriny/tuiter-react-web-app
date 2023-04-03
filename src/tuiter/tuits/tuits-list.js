import React from "react";
//import {useSelector} from "react-redux";

//import PostSummaryList from "../post-summary-list";
import "./index.css";
//import PostSummaryItem from "../post-summary-list/post-summary-item";
import TuitItem from "./tuit-item";
//import HomeComponent from "../home";
const TuitsList = () => {
    return(
        <>
            <body>
            <ul className="list-group">
                {
                    <TuitItem/>
                }
            </ul>
            </body>
        </>
    );
};
export default TuitsList;


