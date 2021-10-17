
const NavigationSidebar = (active) => {
    return(`
                <div class="list-group wd-fonts-family">
    
                    <a href="#" class="list-group-item list-group-item-action py-3 wd-border-none">
                        <div class="row">
                            <div class="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-1">
                                <i class="fab fa-twitter"></i>
                            </div>
                        </div>
                    </a>
    
                    <a href="../HomeScreen/home.html" class="list-group-item list-group-item-action py-3 wd-border-none
                    ${active === 'Home' ? 'active' : ''}">
                        <div class="row">
                            <div class="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-1">
                                <i class="fas fa-home"></i>
                            </div>
                            <div class="col-xxl-10 col-xl-8 d-none d-xl-block">
                                Home
                            </div>
                        </div>
                    </a>
    
                    <a href="../ExploreScreen/explore.html" class="list-group-item list-group-item-action py-3 wd-border-none 
                    ${active === 'Explore' ? 'active' : ''}"  >
                        <div class="row">
                            <div class="col-xxl-2 col-xl-2 col-lg-2 col-sm-2">
                                <i class="fas fa-hashtag"></i>
                            </div>
                            <div class="col-xxl-10 col-xl-8 d-none d-xl-block">
                                Explore
                            </div>
                        </div>
                    </a>
    
                    <a href="#" class="list-group-item list-group-item-action py-3 wd-border-none
                    ${active === 'notifications' ? 'active' : ''}">
                        <div class="row">
                            <div class="col-xxl-2 col-xl-2 col-lg-2 col-sm-2">
                                <i class="far fa-bell"></i>
                            </div>
                            <div class="col-xxl-10 col-xl-8 d-none d-xl-block">
                                Notifications
                            </div>
                        </div>
                    </a>
    
                    <a href="#" class="list-group-item list-group-item-action py-3 wd-border-none
                    ${active === 'messages' ? 'active' : ''}">
                        <div class="row">
                            <div class="col-xxl-2 col-xl-2 col-lg-2 col-sm-2">
                                <i class="far fa-envelope"></i>
                            </div>
                            <div class="col-xxl-10 col-xl-8 d-none d-xl-block">
                                Messages
                            </div>
                        </div>
                    </a>
    
                    <a href="#" class="list-group-item list-group-item-action py-3 wd-border-none
                     ${active === 'bookmarks' ? 'active' : ''}">
                        <div class="row">
                            <div class="col-xxl-2 col-xl-2 col-lg-2 col-sm-2">
                                <i class="far fa-bookmark"></i>
                            </div>
                            <div class="col-xxl-10 col-xl-8 d-none d-xl-block">
                                Bookmarks
                            </div>
                        </div>
                    </a>
    
    
                    <a href="#" class="list-group-item list-group-item-action py-3 wd-border-none">
                        <div class="row">
                            <div class="col-xxl-2 col-xl-2 col-lg-2 col-sm-2">
                                <i class="fa fa-list"></i>
                            </div>
                            <div class="col-xxl-10 col-xl-8 d-none d-xl-block">
                                Lists
                            </div>
                        </div>
                    </a>
    
    
                    <a href="#" class="list-group-item list-group-item-action py-3 wd-border-none">
                        <div class="row">
                            <div class="col-xxl-2 col-xl-2 col-lg-2 col-sm-2">
                                <i class="far fa-user"></i>
                            </div>
                            <div class="col-xxl-10 col-xl-8 d-none d-xl-block">
                                Profile
                            </div>
                        </div>
                    </a>
    
                    <a href="#" class="list-group-item list-group-item-action py-3 wd-border-none">
                        <div class="row">
                            <div class="col-xxl-2 col-xl-2 col-lg-2 col-sm-2">
                                  <i class="fas fa-ellipsis-h"></i>
                            </div>
                            <div class="col-xxl-10 col-xl-8 d-none d-xl-block">
                                More
                            </div>
                        </div>
                    </a>
                </div>
        <div class="btn-group" style="width:100%">
    
        <button type="button" class="mt-2 btn text-center btn-primary btn-block rounded-pill py-2">Tweet</button>
        </div>
    `);
}
export default NavigationSidebar;
