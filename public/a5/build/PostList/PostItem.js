
const PostItem = (homepost) => {
    return(`

<div class="p-2 wd-border-solid wd-border-thin wd-border-darkgray wd-fonts-family">
    <div class="wd-float-left py-2 px-1" ><img class="wd-rounded-corners-all-around wd-image-radius" src=${homepost.avatarIcon} width="54px" height="54px"/></div>
   
    <div class="wd-float-left wd-dimension-post p-1" >
        <div class="p-1" >
            <span class="wd-fonts-bold wd-fonts-white"> ${homepost.userName} <i class="px-1 fas fa-check-circle"></i> </span>
            <span class="wd-fonts-lightgray"> ${homepost.handle}  &middot; ${homepost.time} </span>
        </div>
        <div class="wd-fonts-white p-1" > ${homepost.title}</div>
           
        <div class="mt-2 wd-thinrounded-corners-all-around wd-border-solid wd-border-thin wd-border-darkgray">
            <div class="" > <img class="wd-top-rounded wd-bottom-rounded wd-border-solid wd-border-thin wd-border-darkgray" src=${homepost.image} width="100%" height="274px"/> </div>
                    <div class="ms-2 mt-2 wd-fonts-white wd-fonts-bold" > ${homepost.imageTitle}</div>
                    <div class="ms-2 me-2" > ${homepost.imageDesc} </div>
                    <div class="ms-2 mb-1 mt-1" > ${homepost.linkicon}  ${homepost.link} </div>
        </div>
        
        <div class=" ms-2 py-3" >
            <a class="wd-fonts-highlight ms-3" style="text-decoration: none;"> <i class="far fa-comment"></i> <span class="wd-margin-left"> ${homepost.message} </span></a>
            <a class="wd-fonts-highlight wd-margin-left2" style="text-decoration: none;"> <i class="fa fa-retweet"></i> <span class="wd-margin-left"> ${homepost.retweet} </span></a>
            <a class="wd-fonts-highlight wd-margin-left2" style="text-decoration: none;"> <span class="wd-fg-color-red"> <i class="far fa-heart"></i> </span>  <span class="wd-margin-left">${homepost.like} </span></a>
            <a class="wd-fonts-highlight wd-margin-left2" style="text-decoration: none;"> <i class="fa fa-upload"></i> <span class="wd-margin-left"> </span></a>
        </div>
    </div>
    </div>

    `);
}
export default PostItem;

