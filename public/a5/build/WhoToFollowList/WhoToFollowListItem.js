
const WhoToFollowListItem = (who) => {
    return(`
            <a href="#" class="list-group-item list-group-item-action wd-border-none">
                <div class="row">
                    <div class="col-xxl-2 col-xl-2 col-lg-2">
                        <div> <img class="wd-image-size rounded-circle" src=${who.avatarIcon}> </div>
                    </div>

                    <div class="col-xxl-7 col-xl-6 col-lg-6 text-nowrap">
                        <div class="wd-fonts-bold">${who.userName} <i class="px-1 fas fa-check-circle"></i></div>
                        <div class="wd-fonts-title">@${who.handle}</div>
                    </div>

                    <div class="col-xxl-3 col-xl-3 col-lg-3">
                        <button type="button" class="btn text-center btn-primary btn-block rounded-pill">Follow</button>
                    </div>

                </div>
            </a>
    `);
}
export default WhoToFollowListItem;

