/* eslint-disable jsx-a11y/alt-text */
import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import {fetchProfile, updateProfile} from "../../../../services/profileService";


const EditProfile = () =>{
    const profileData = useSelector((state) => state.profile.profile)
    let[newInput, setProfileData] = useState({})
    const dispatch = useDispatch();
    const saveChanges = () => {
       // dispatch({type:'save', newInput})
        updateProfile(dispatch, newInput);
    }

    return(
        <>
            <div className = "row">
                <div className = "col-2">
                    <Link to="/a8/twitter/profile"><i className="fas fa-2x fa-arrow-left"></i></Link>
                </div>
                <div className = "col-8">
                    <div className = "row pb-0 mb-0 text-muted">
                        <h5>Edit Profile</h5>
                    </div>
                </div>
                <div className="col-2">
                    <Link to="/a8/twitter/profile">
                    <button className="btn btn-light rounded-pill" onClick={saveChanges}>
                       <strong>Save</strong>
                    </button>
                    </Link>
                </div>
            </div>


            <div className='pb-3 row mt-3'>

                <div className="position-relative pb-5">
                    <div className="row">
                        <img src= {profileData.bannerPicture} height={"325px"} />

                        <div className='position-absolute' style={{top:"270px", left : "5px"}}>
                            <img className="img-fluid rounded-circle bg-white" src={profileData.profilePicture} width={'100px'} height={"100px"}/>
                        </div>
                    </div>
                </div>


            </div>
            <div className = "wd-details-form">
                <ul className="list-group">
                    <li className="list-group-item wd-item-list"
                    style={{'border-top-left-radius': '15px','border-top-right-radius': '15px'}}>  
                        <label>Name</label>  
                        <input type="text" defaultValue={profileData.firstName} className="form-control" style={{"background-color": 'black'}} name="name"
                        onChange = {e => setProfileData((value) => ({...value,[e.target.name] : e.target.value}))}/>
                    </li>
                    <br/>
                    <li className="list-group-item wd-item-list">
                        <label>Bio</label>
                        <textarea defaultValue={profileData.bio} className="form-control" style={{"background-color": 'black'}} name = "bio"
                        onChange = {e => setProfileData((value) =>({...value,[e.target.name]: e.target.value}))}> 
                        </textarea>
                    </li>
                    <br/>  
                    <li className="list-group-item wd-item-list">
                        <label>Location</label>
                        <input type="text" placeholder="Name" defaultValue={profileData.location} className="form-control" style={{"background-color": 'black'}} name = "location"
                        onChange = {e => setProfileData((value) =>({...value,[e.target.name] : e.target.value}))}/>
                    </li>
                    <br/>  
                    <li className="list-group-item wd-item-list">
                        <label>Website</label>

                        <input type="text" placeholder="Website" defaultValue={profileData.website} className="form-control" style={{"background-color": 'black'}} name = "website"
                        onChange = {e => setProfileData((value) =>({...value,[e.target.name] : e.target.value}))}/>
                    </li>
                    <br/>
                    <li className="list-group-item wd-item-list">
                        <label>Birth Date</label>
                        <input type="text" placeholder="Date" defaultValue={profileData.dateOfBirth} className="form-control" style={{"background-color": 'black'}} name = "dateOfBirth"
                        onChange = {e => setProfileData((value) =>({...value,[e.target.name] : e.target.value}))}/>
                    </li>
                    <br/>
                    <br></br>
                </ul>
            </div>
        </>
    )
}

export default EditProfile;