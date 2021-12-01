import React from "react";
import {useDispatch} from "react-redux";

const WhoToFollowListItem = ({who}) => {
    const dispatch = useDispatch();

    return(
            <a href="#" className="list-group-item list-group-item-action wd-border-none">
                <div className="row">
                    <div className="col-xxl-2 col-xl-2 col-lg-2">
                        <div> <img className="wd-image-size rounded-circle" src={who.avatarIcon}/> </div>
                    </div>

                    <div className="col-xxl-7 col-xl-6 col-lg-6 text-nowrap">
                        <div className="wd-fonts-bold">{who.userName} <i className="px-1 fas fa-check-circle"></i></div>
                        <div className="wd-fonts-title">@{who.handle}</div>
                    </div>

                    <div className="col-xxl-3 col-xl-3 col-lg-3">
                        <button type="button" className="btn text-center btn-primary btn-block rounded-pill">Follow</button>
                    </div>

                </div>
            </a>
    );
}
export default WhoToFollowListItem;

