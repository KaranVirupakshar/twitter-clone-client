import React, {useEffect} from "react";
import PostItem from "./PostItem.js";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {fetchAllTweets} from "../../../../services/twitterServiceA9";



const selectAllTweets = (state) => state.tweets.tweets;

const PostList = () => {
    const homepost = useSelector(selectAllTweets);
    const dispatch = useDispatch();
    useEffect(() => fetchAllTweets(dispatch), [])
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

