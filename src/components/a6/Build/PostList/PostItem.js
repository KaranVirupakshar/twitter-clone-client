import React from "react";

const PostItem = (
    {
        homepost = {
            "avatarIcon": "../../../images/profile2.jpeg", "userName": "Elon Musk", "handle": "@elonmusk", "time": "23h", "title": "Amazing show about <span> <a href=\"#\" style={{\"text-decoration\": \"none\"}}> @Inspiration4x </a> </span> mission", "image": "../../../images/inspiration4.jpeg", "imageTitle": "Countdown: Inspiration4 Mission to Space | Netflix Official Site", "imageDesc": "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space", "linkicon": "&#128279;" ,"link":"netflix.com", "message":"4.2k", "retweet":"3.5K", "like":"37.5K"
        }

    }) => {
    return(
        <>

    <div className="row  wd-border-solid wd-border-thin wd-border-darkgray wd-fonts-family">
          <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1">
                <div className="py-2 px-1" ><img className="wd-rounded-corners-all-around" src={homepost.avatarIcon} width="54px" height="54px"/></div>
          </div>
                       
          <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 p-1">

   
    <div className="p-1 ms-4" > 
    
    <div className="row">
    
    <div className="col-xxl-11 col-xl-11 col-lg-11 col-md-11 col-sm-11 col-11">
          <span className="p-1 wd-fonts-bold wd-fonts-white"> {homepost.userName} <i className="px-1 fas fa-check-circle"></i> </span>
          <span className="wd-fonts-lightgray"> {homepost.handle}  &middot; {homepost.time} </span>
          
          
          
          <div className="wd-fonts-white p-1" > {homepost.title}</div>
          </div>
          
          <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1">
          <i className="fas fa-ellipsis-h"></i>
          
            </div>
          </div>
          <div className="wd-thinrounded-corners-all-around wd-border-solid wd-border-thin wd-border-darkgray">
            <div className="" > <img className={`wd-top-rounded  wd-border-thin wd-border-darkgray ${homepost.handle === '@elonmusk' ? 'wd-border-solid' : 'wd-bottom-rounded'}`} src={homepost.image} width="100%" height="274px"/> </div>
                    <div className={`ms-2 wd-fonts-white ${homepost.handle === "@elonmusk" ? 'mt-2' : ''}`} > <span className="wd-fonts-bold"> {homepost.imageTitle} </span></div>
                    <div className="ms-2 me-2" > {homepost.imageDesc} </div>
                    <div className="ms-2 mb-1 mt-1" > {homepost.linkicon}  {homepost.link} </div>
          </div>
        
        
        <div className="py-3 me-4 ms-4 d-flex justify-content-between" >
            <a className="wd-fonts-highlight" style={{"text-decoration": "none"}}> <i className="far fa-comment"></i> <span className="wd-margin-left"> {homepost.message} </span></a>
            <a className="wd-fonts-highlight ms-4" style={{"text-decoration": "none"}}> <i className="fa fa-retweet"></i> <span className="wd-margin-left"> {homepost.retweet} </span></a>
            <a className="wd-fonts-highlight ms-4" style={{"text-decoration": "none"}}> <span className="wd-fg-color-red"> <i className="far fa-heart"></i> </span>  <span className="wd-margin-left">{homepost.like} </span></a>
            <a className="wd-fonts-highlight px-4" style={{"text-decoration": "none"}}> <i className="fa fa-upload"></i> <span className="wd-margin-left"> </span></a>
        </div>
   
    </div>
    </div>
    </div>

</>
    );
}
export default PostItem;

