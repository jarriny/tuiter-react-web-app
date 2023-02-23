const WhoToFollowListItem = (who) => {
    return(`
    <li>
      <a href="../home.html"
               class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col-2">
                        <img src= "../../images/${who.avatarIcon}" alt="..." class="rounded-circle mt-1" width="40px">
                    </div>
                    <div class="col-6">
                        <div class="fw-bold"> ${who.userName}
                        </div>
                        @
                        ${who.handle}
                    </div>
                    <div class="col-4">
                        <button class="btn btn-primary w-100 mt-1 rounded-pill">
                            Follow
                        </button>
                    </div>
                </div>
            </a>
    </li>`
    );
}
export default WhoToFollowListItem;

