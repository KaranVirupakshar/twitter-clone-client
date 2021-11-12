import React from "react";
import {Link} from "react-router-dom";

const NavigationSidebar = (
    {
        active = 'explore'
    }) => {
    return(
        <>
                <div className="list-group wd-fonts-family">


                    <Link to="/a7" className="list-group-item list-group-item-action py-3 wd-border-none">
                        <div className="row">
                            <div className="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-1">
                                <i className="fab fa-twitter"></i>
                            </div>
                        </div>
                    </Link>

                    <Link to="/a7/twitter/home" className={`list-group-item list-group-item-action py-3 wd-border-none
                    ${active === 'Home' ? 'active' : ''}`}>
                        <div className="row">
                            <div className="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-1">
                                <i className="fas fa-home"></i>
                            </div>
                            <div className="col-xxl-10 col-xl-8 d-none d-xl-block">
                                Home
                            </div>
                        </div>
                    </Link>

                    <Link to="/a7/twitter/explore" className={`list-group-item list-group-item-action py-3 wd-border-none 
                    ${active === 'Explore' ? 'active' : ''}`}  >
                        <div className="row">
                            <div className="col-xxl-2 col-xl-2 col-lg-2 col-sm-2">
                                <i className="fas fa-hashtag"></i>
                            </div>
                            <div className="col-xxl-10 col-xl-8 d-none d-xl-block">
                                Explore
                            </div>
                        </div>
                    </Link>
    
                    <a href="#" className={`list-group-item list-group-item-action py-3 wd-border-none
                    ${active === 'notifications' ? 'active' : ''}`}>
                        <div className="row">
                            <div className="col-xxl-2 col-xl-2 col-lg-2 col-sm-2">
                                <i className="far fa-bell"></i>
                            </div>
                            <div className="col-xxl-10 col-xl-8 d-none d-xl-block">
                                Notifications
                            </div>
                        </div>
                    </a>
    
                    <a href="#" className={`list-group-item list-group-item-action py-3 wd-border-none
                    ${active === 'messages' ? 'active' : ''}`}>
                        <div className="row">
                            <div className="col-xxl-2 col-xl-2 col-lg-2 col-sm-2">
                                <i className="far fa-envelope"></i>
                            </div>
                            <div className="col-xxl-10 col-xl-8 d-none d-xl-block">
                                Messages
                            </div>
                        </div>
                    </a>
    
                    <a href="#" className={`list-group-item list-group-item-action py-3 wd-border-none
                     ${active === 'bookmarks' ? 'active' : ''}`}>
                        <div className="row">
                            <div className="col-xxl-2 col-xl-2 col-lg-2 col-sm-2">
                                <i className="far fa-bookmark"></i>
                            </div>
                            <div className="col-xxl-10 col-xl-8 d-none d-xl-block">
                                Bookmarks
                            </div>
                        </div>
                    </a>
    
    
                    <a href="#" className={`list-group-item list-group-item-action py-3 wd-border-none`}>
                        <div className="row">
                            <div className="col-xxl-2 col-xl-2 col-lg-2 col-sm-2">
                                <i className="fa fa-list"></i>
                            </div>
                            <div className="col-xxl-10 col-xl-8 d-none d-xl-block">
                                Lists
                            </div>
                        </div>
                    </a>
    
    
                    <a href="#" className={`list-group-item list-group-item-action py-3 wd-border-none`}>
                        <div className="row">
                            <div className="col-xxl-2 col-xl-2 col-lg-2 col-sm-2">
                                <i className="far fa-user"></i>
                            </div>
                            <div className="col-xxl-10 col-xl-8 d-none d-xl-block">
                                Profile
                            </div>
                        </div>
                    </a>
    
                    <a href="#" className={`list-group-item list-group-item-action py-3 wd-border-none`}>
                        <div className="row">
                            <div className="col-xxl-2 col-xl-2 col-lg-2 col-sm-2">
                                  <i className="fas fa-ellipsis-h"></i>
                            </div>
                            <div className="col-xxl-10 col-xl-8 d-none d-xl-block">
                                More
                            </div>
                        </div>
                    </a>
                </div>
        <div className="btn-group" style={{"width": "100%"}}>
    
        <button type="button" className="mt-2 btn text-center btn-primary btn-block rounded-pill py-2">Tweet</button>
        </div>
        </>
    );
}
export default NavigationSidebar;
