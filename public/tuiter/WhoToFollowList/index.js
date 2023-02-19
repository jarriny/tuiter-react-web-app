import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"

const WhoToFollowList = () => {
    return(`
       <ul class="list-group col-4 d-none d-lg-block list-unstyled">
       <a href="../home.html"
               class="list-group-item list-group-item-action">
                <div class="row fw-bolder">
                    Who to follow
                </div>
            </a>
       
           ${
        who.map(todo => {
            return(WhoToFollowListItem(todo));
        }).join('')
    }
       </ul>
   `);
}

export default WhoToFollowList;