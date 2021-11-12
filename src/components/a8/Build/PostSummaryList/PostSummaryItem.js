import React from "react";

const PostSummaryItem = (
    {
        post = {
            "topic": "Web Development",
            "userName": "ReactJS",
            "time": "2h",
            "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
            "image": "../../../images/react.png/"
        }

    }) => {
    return(
        <>
            <a href="#" className="list-group-item list-group-item-action wd-fonts-family">
                <div className="row">
                    <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10">
                       <div className="wd-fonts-title">{post.topic}</div>
                        <div className="wd-fonts-bold">{post.userName} <i className="fas fa-check-circle"></i><span className="wd-fonts-highlight"> &middot; {post.time}</span></div>
                        <div className="wd-fonts-family wd-fonts-size14">{post.title} </div>
                    </div>
                    <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 ">
                        <div> <img className="img-fluid wd-border-rounded-for-images-2" src={post.image}/> </div>
                    </div>
                </div>
            </a>

        </>
    );
}
export default PostSummaryItem;

