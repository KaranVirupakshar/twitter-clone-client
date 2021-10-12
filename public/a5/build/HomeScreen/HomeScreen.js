
import NavigationSidebar from "../NavigationSidebar/index.js";
import PostList from "../PostList/index.js";
import PostSummaryList from "../PostSummaryList/index.js";

(function ($) {
    $('#wd-explore').append(`
        <div class="row mt-2">
        <div class="col-2 col-md-2 col-lg-1 col-xl-2 col-xxl-2 mt-1">
            ${NavigationSidebar()}
        </div>
        <div class="col-8 col-md-8 col-lg-7 col-xl-6 col-xxl-6 ">
            ${PostList()}
        </div>
        <div class="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 col-xxl-4 mt-1">
            ${PostSummaryList()}
        </div>
        </div>
    `);
})($);
