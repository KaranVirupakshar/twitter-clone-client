import React from "react";
import PostItem from "./PostItem.js";
import homepost from "./homepost.json"

const PostList = () => {
    return (
        <>
            <ul class="list-group">
            {
        homepost.map(homepost => {
            return(<PostItem homepost = {homepost}/>);
        })
    }
            </ul>
        </>
);
}
export default PostList;