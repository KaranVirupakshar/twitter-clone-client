import React, {useEffect, useState} from 'react';
import { Link, Route } from 'react-router-dom';
import EditProfile from "./EditProfile";
import {fetchProfile} from "../../../../services/profileServiceA9";

const Profile = () => {
    const [profile, setProfiles] = useState([]);
    useEffect(() => fetchProfile().then(profiles => setProfiles(profiles)))

    return(
        profile.map(profile => {

            return(


            <div className="">

                <div className="row ">
                    <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1">
                        <i className="fas fa-2x fa-arrow-left"></i>
                    </div>
                    <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 px-5">
                        <div className="row fw-bold fs-6">{profile.firstName} </div>
                        <div className="row fs-10 text-muted">5178 tweets</div>
                    </div>


                </div>

                <div className='pb-3 row'>

                    <div className="position-relative pb-5">
                        <div className="row">
                            <img src={profile.bannerPicture} height={"325px"}/>

                            <div className='position-absolute' style={{top: "270px", left: "5px"}}>
                                <img className="img-fluid rounded-circle bg-white" src={profile.profilePicture}
                                     width={'100px'} height={"100px"}/>
                            </div>
                        </div>
                    </div>


                </div>


                <div className="row px-4">
                    <div className="col-xxl-9 col-xl-8 col-lg-7 col-md-8 col-sm-7 col-8">
                        <div className="fs-5">
                            <div className="row fw-bold fs-5">{profile.firstName}</div>
                            <div className="row fs-6 text-muted">@{profile.handle}</div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-xl-4 col-lg-5 col-md-4 col-sm-5 col-4 ">
                        <div className="btn-group  position-relative " style={{"width": "100%"}}>

                            <Link to="/a9/twitter/profile/editProfile">
                                <button className="btn btn-light rounded-pill mt-3">
                                    <strong>Edit Profile</strong>
                                </button>
                            </Link>
                            <Route path={"/a9/twitter/profile/editProfile"}>
                                <EditProfile/>
                            </Route>
                        </div>


                    </div>
                </div>

                <div className="row px-4 py-2">
                    {profile.bio}
                </div>

                <div className="row px-2 py-2 text-muted">

               <span><i
                   className="fas fa-map-marker-alt"></i> &nbsp;{profile.location} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                   <i className="fas fa-golf-ball"></i> &nbsp;Born {profile.dateOfBirth} &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                   <i className="far fa-calendar-alt"></i> &nbsp;Joined {profile.dateJoined}</span>
                </div>

                <div className="row px-2 py-2 mb-3">
                    <div>
                        <span className='col px-1'><span className='fw-bold'>{profile.followingCount}</span> <span
                            className='text-muted'>&nbsp;Following</span> </span>
                        <span className='col px-2'><span className='fw-bold'>{profile.followersCount}</span> <span
                            className='text-muted'>&nbsp;Followers</span> </span>
                    </div>
                </div>


            </div>

        )
            ;

        })
    )


}


export default Profile;