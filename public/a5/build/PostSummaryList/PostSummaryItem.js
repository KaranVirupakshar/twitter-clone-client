
const PostSummaryItem = (post) => {
    return(`
            <a href="#" class="list-group-item list-group-item-action wd-fonts-family">
                <div class="row">
                    <div class="col-xxl-9 col-xl-9 col-lg-9 col-md-10 col-sm-10 col-10">
                       <div class="wd-fonts-title">${post.topic}</div>
                        <div class="wd-fonts-bold">${post.userName} <i class="fas fa-check-circle"></i><span class="wd-fonts-highlight"> &middot; 2h</span></div>
                        <div class="wd-fonts-family wd-fonts-size14">${post.title} </div>
                    </div>
                    <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-2 col-sm-2 col-2 ">
                        <div> <img class="img-fluid wd-border-rounded-for-images-2" src="${post.image}"> </div>
                    </div>
                </div>
            </a>
    `);
}
export default PostSummaryItem;

