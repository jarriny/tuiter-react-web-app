import WhoToFollowList from "./../WhoToFollowList/index.js"
import ExploreComponent from "./ExploreComponent.js";


function exploreComponent() {
    $('#wd-explore').append(`
  <div class="row">
        ${NavigationSidebar()}


        ${ExploreComponent()}


        ${WhoToFollowList()}


    </div>
   `);
}
$(exploreComponent);