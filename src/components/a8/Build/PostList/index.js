import React from "react";
import PostItem from "./PostItem.js";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";


const selectAllTweets = (state) => state.tweets.tweets;

const PostList = () => {
    const homepost = useSelector(selectAllTweets);
    return (
            <ul className="list-group">
            {
        homepost.map(homepost => {
            return(<PostItem homepost = {homepost}/>);
        })
    }
            </ul>
);
}
export default PostList;

