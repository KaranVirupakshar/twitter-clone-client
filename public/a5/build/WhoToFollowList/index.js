import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"

const WhoToFollowList = () => {
    return (`
            <ul class="list-group">
            <a href="#" class="list-group-item list-group-item-action wd-border-none">
                <div class="col-xxl-7 col-xl-7 col-lg-10">
                    <div class="px-1 wd-fonts-bold">Who to follow </div>
                </div>
            </a>
            ${
        who.map(who => {
            return(WhoToFollowListItem(who));
        }).join('')
    }
            </ul>
`);
}
export default WhoToFollowList;
