import React from "react";
import PostSummaryItem from "./PostSummaryItem.js";
import post from "./post.json"

const PostSummaryList = ({title}) => {
    return (
        <>
            <ul className="list-group">
                {
                    title &&
                    <li className="list-group-item">
                        <h5 className="fw-bolder">{title}</h5>
                    </li>
                }
            {
        post.map(post => {
            return(<PostSummaryItem post={post}/>);
        })
    }
            </ul>
        </>
);
}
export default PostSummaryList;
