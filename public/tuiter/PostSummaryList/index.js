import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js"

const PostSummaryList = () => {
    return(`
        <div class="col-10 col-lg-7 col-xl-6 text-white">

            <div class="row">
                <div class="col-11">
                    <div class="position-relative">
                        <input class="ps-5 form-control rounded-pill" placeholder="Search Tuiter"/>
                        <i class="wd-search position-absolute fa fa-search"></i>
                    </div>
                </div>
                <div class="col-1">
                    <i class="fa-2x fa fa-cog pt-1" style="color: #007FFF"></i>
                </div>

            </div>

            <ul class="nav nav-tabs mt-1 mb-1">
                <li class="nav-item">
                    <a class="nav-link active" href="../for-you.html">For You</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="../trending.html">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="../news.html">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " href="../sports.html" >Sports</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " href="../entertainment.html" >Entertainment</a>
                </li>
            </ul>
            <div class="position-relative">
                <img src="../../images/spaceX.jpg" width="100%"/>
                <h1 class="position-absolute bottom-0 left-0 text-white">SpaceX's Starship</h1>
            </div>
            
            
       <ul class="list-group">
       
           ${
        posts.map(todo => {
            return(PostSummaryItem(todo));
        }).join('')
    }
       </ul>
       </div>
   `);
}

export default PostSummaryList;