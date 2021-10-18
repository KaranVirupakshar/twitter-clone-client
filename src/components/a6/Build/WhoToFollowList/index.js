import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import who from "./who.json"

const WhoToFollowList = () => {
    return (
        <>
            <ul class="list-group">
            <a href="#" class="list-group-item list-group-item-action wd-border-none">
                <div class="col-xxl-7 col-xl-7 col-lg-10">
                    <div class="px-1 wd-fonts-bold">Who to follow </div>
                </div>
            </a>
            {
        who.map(who => {
            return(<WhoToFollowListItem who={who}/>);
        })
    }
            </ul>
          </>
);
}
export default WhoToFollowList;
