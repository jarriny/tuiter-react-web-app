import WhoToFollowList from "./../WhoToFollowList/index.js"
import PostSummaryList from "./../PostSummaryList/index.js"


function exploreComponent() {
    $('#wd-explore').append(`
  <div class="row">
        ${NavigationSidebar()}


        ${PostSummaryList()}


        ${WhoToFollowList()}


    </div>
   `);
}
$(exploreComponent);