import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import {useSelector} from "react-redux";

const WhoToFollowList = () => {
    const who = useSelector((state) => state.who);
    return (
            <ul className="list-group">
            <a href="#" className="list-group-item list-group-item-action wd-border-none">
                <div className="col-xxl-7 col-xl-7 col-lg-10">
                    <div className="px-1 wd-fonts-bold"> Who to follow </div>
                </div>
            </a>
            {
        who.map(who => {
            return(<WhoToFollowListItem who={who}/>);
        })
    }
            </ul>
);
}
export default WhoToFollowList;
