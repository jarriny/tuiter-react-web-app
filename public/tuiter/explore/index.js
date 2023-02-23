import WhoToFollowList from "./../WhoToFollowList/index.js"
import ExploreComponent from "./ExploreComponent.js";
import NavigationSidebar from "./../NavigationSidebar/index.js";

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