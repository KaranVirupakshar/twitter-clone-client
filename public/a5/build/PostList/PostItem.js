
const PostItem = (homepost) => {
    return(`

    <div class="row  wd-border-solid wd-border-thin wd-border-darkgray wd-fonts-family">
          <div class="col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1">
                <div class="py-2 px-1" ><img class="wd-rounded-corners-all-around" src=${homepost.avatarIcon} width="54px" height="54px"/></div>
          </div>
                       
          <div class="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 p-1">

   
    <div class="p-1 ms-4" > 
          <span class="p-1 wd-fonts-bold wd-fonts-white"> ${homepost.userName} <i class="px-1 fas fa-check-circle"></i> </span>
          <span class="wd-fonts-lightgray"> ${homepost.handle}  &middot; ${homepost.time} </span>
          
          <div class="wd-fonts-white p-1" > ${homepost.title}</div>
          <div class="wd-thinrounded-corners-all-around wd-border-solid wd-border-thin wd-border-darkgray">
            <div class="" > <img class="wd-top-rounded wd-bottom-rounded wd-border-solid wd-border-thin wd-border-darkgray" src=${homepost.image} width="100%" height="274px"/> </div>
                    <div class="ms-2 wd-fonts-white" > <span class="wd-fonts-bold"> ${homepost.imageTitle} </span></div>
                    <div class="ms-2 me-2" > ${homepost.imageDesc} </div>
                    <div class="ms-2 mb-1 mt-1" > ${homepost.linkicon}  ${homepost.link} </div>
          </div>
        
        
        <div class="py-3 d-flex justify-content-evenly" >
            <a class="wd-fonts-highlight" style="text-decoration: none;"> <i class="far fa-comment"></i> <span class="wd-margin-left"> ${homepost.message} </span></a>
            <a class="wd-fonts-highlight ms-4" style="text-decoration: none;"> <i class="fa fa-retweet"></i> <span class="wd-margin-left"> ${homepost.retweet} </span></a>
            <a class="wd-fonts-highlight ms-4" style="text-decoration: none;"> <span class="wd-fg-color-red"> <i class="far fa-heart"></i> </span>  <span class="wd-margin-left">${homepost.like} </span></a>
            <a class="wd-fonts-highlight px-4" style="text-decoration: none;"> <i class="fa fa-upload"></i> <span class="wd-margin-left"> </span></a>
        </div>
   
    </div>
    </div>
    </div>    
    

    `);
}
export default PostItem;
