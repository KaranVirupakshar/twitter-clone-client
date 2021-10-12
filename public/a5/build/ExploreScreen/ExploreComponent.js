import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
                <div class="row">
                    <div class="ms-4 col-xxl-9 col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9">
                        <input class="form-control wd-rounded-corners-all-around icon ps-5 py-2" placeholder="Search twitter">
                    </div>
                    <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                        <i class="ms-4 fas fa-cog fa-2x py-1"></i>
                    </div>

                </div>
                <ul class="nav nav-tabs nav-fill flex-md-nowrap mt-2">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">For you</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Trending</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">News</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Sports</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link d-none d-md-block" href="#">Entertainment</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link d-none d-xxl-block" href="#">Covid-19</a>
                    </li>
                </ul>

            <div class="wd-border-darkgray card mt-2">
                    <img class="card-img-top" src="../starship.jpeg" alt="Card image cap">
                    <div class="card-body text-white wd-text-large rgba-black-light p-2 wd-bottom-left wd-fonts-bold wd-fonts-size20"> SpaceX's Starship set to take off from base ground of houston this evening
                    </div>
            </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
