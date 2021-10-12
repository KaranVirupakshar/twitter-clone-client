import PostItem from "./PostItem.js";
import homepost from "./homepost.js"

const PostList = () => {
    return (`
            <ul class="list-group">
            ${
        homepost.map(homepost => {
            return(PostItem(homepost));
        }).join('')
    }
            </ul>
`);
}
export default PostList;