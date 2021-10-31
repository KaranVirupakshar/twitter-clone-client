import React from "react";
import {useDispatch} from "react-redux";
import TweetStats from "./TweetStats";

const PostItem = ({homepost}) => {
    const dispatch = useDispatch();
    const deleteTweetClickHandler = () => {
        dispatch({type: 'delete-tweet', homepost})
    }

    return(
        <li className="list-group-item">
            <table>
                <tr>
                    <td className="align-text-top">
                        <img className="rounded-circle wd-avatar-image" width="50px" height="50px"
                             src={homepost['logo-image']}/>
                    </td>
                    <td className="ps-3" style={{width: '100%'}}>
                        <i onClick={deleteTweetClickHandler} className="fas fa-times fa-pull-right"></i>
                        <span className="fw-bold">{homepost.userName}</span>
                        {homepost.verified && <i className="ms-1 fas fa-badge-check"></i>}
                        <span className="ms-1 text-secondary">@{homepost.handle}</span>
                        <div>
                            {homepost.tweet}
                        </div>
                        {
                            homepost.attachments && homepost.attachments.image &&
                            <img src={homepost.attachments.image}
                                 className="mt-2 wd-border-radius-20px"
                                 style={{width: "95%"}}/>
                        }
                        {
                            homepost.attachments && homepost.attachments.video &&
                            <iframe width="95%" height="350px"
                                    className="mt-2 wd-border-radius-20px"
                                    style={{width: "95%"}}
                                    src={`https://www.youtube.com/embed/${homepost.attachments.video}`}
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>
                        }
                        <TweetStats tweet={homepost}/>
                    </td>
                </tr>
            </table>
        </li>
    );
}
export default PostItem;

