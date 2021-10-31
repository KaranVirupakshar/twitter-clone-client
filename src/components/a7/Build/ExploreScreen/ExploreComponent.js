import React from "react";
import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
    return(
        <>
                <div className="row">
                    <div className="ms-4 col-xxl-9 col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9">
                        <input className="form-control wd-rounded-corners-all-around icon ps-5 py-2" placeholder="Search twitter"/>
                    </div>
                    <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                        <i className="ms-4 fas fa-cog fa-2x py-1"></i>
                    </div>

                </div>
                <ul className="nav nav-tabs nav-fill flex-md-nowrap mt-2">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">For you</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Trending</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">News</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Sports</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link d-none d-md-block" href="#">Entertainment</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link d-none d-xxl-block" href="#">Covid-19</a>
                    </li>
                </ul>

            <div className="wd-border-darkgray card mt-2">
                    <img className="card-img-top" src="../../../images/starship.jpeg" alt="Card image cap"/>
                    <div className="card-body text-white wd-text-large rgba-black-light p-2 wd-bottom-left wd-fonts-bold wd-fonts-size20"> SpaceX's Starship set to take off from base ground of houston this evening
                    </div>
            </div>
           {PostSummaryList()}

        </>
    );
}
export default ExploreComponent;
