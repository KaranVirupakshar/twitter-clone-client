
const PostSummaryItem = (post) => {
    return(`
            <a href="#" class="list-group-item list-group-item-action wd-fonts-family">
                <div class="row">
                    <div class="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10">
                       <div class="wd-fonts-title">${post.topic}</div>
                        <div class="wd-fonts-bold">${post.userName} <i class="fas fa-check-circle"></i><span class="wd-fonts-highlight"> &middot; 2h</span></div>
                        <div class="wd-fonts-family wd-fonts-size14">${post.title} </div>
                    </div>
                    <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                        <div> <img class="img-fluid wd-border-rounded-for-images-2" src="${post.image}"> </div>
                    </div>
                </div>
            </a>
    `);
}
export default PostSummaryItem;

