import WhoToFollowList from "./../WhoToFollowList/index.js"

function exploreComponent() {
    $('#wd-explore').append(`
  <div class="row">
        ${NavigationSidebar()}


        <div class="col-6 d-none d-xl-block">

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
                <li class="list-group-item">
                    <div class="row">
                        <div class="col-8 text-secondary">
                            <div>
                                Web Development
                            </div>
                            <div class="fw-bolder">
                                React JS - 2hr
                            </div>
                            <div class="fw-bolder">
                                React.js is a single page Application framework
                            </div>
                        </div>
                        <div class="col-4">
                            <img class="float-end" src="../../images/react.jpg" width="100px">
                        </div>
                    </div>
                </li>
            </ul>


            <ul class="list-group">
                <li class="list-group-item">
                    <div class="row">
                        <div class="col-8 text-secondary">
                            <div class="fw-bolder">
                                JavaScript - 2hr
                            </div>
                            <div class="fw-bolder">
                                JavaScript is a programming language that can be run on browsers as well as desktops
                            </div>
                            <div>
                                123k Tweets
                            </div>
                        </div>
                        <div class="col-4">
                            <img class="float-end" src="../../images/js.jpg" width="100px">
                        </div>
                    </div>
                </li>
            </ul>

            <ul class="list-group">
                <li class="list-group-item">
                    <div class="row">
                        <div class="col-8 text-secondary">
                            <div >
                                Web Development
                            </div>
                            <div class="fw-bolder">
                                jQuery
                            </div>
                            <div>
                                123k Tweets
                            </div>
                        </div>
                        <div class="col-4">
                            <img class="float-end" src="../../images/jquery.jpg" width="100px">
                        </div>
                    </div>
                </li>
            </ul>

            <ul class="list-group">
                <li class="list-group-item">
                    <div class="row">
                        <div class="col-8 text-secondary">
                            <div >
                                Web Development
                            </div>
                            <div class="fw-bolder">
                                NodeJS - 2h
                            </div>
                            <div>
                                123k Tweets
                            </div>
                        </div>
                        <div class="col-4">
                            <img class="float-end" src="../../images/nodejs.jpg" width="100px">
                        </div>
                    </div>
                </li>
            </ul>


        </div>
        <div class="col-7 d-none d-lg-block d-xl-none">

            <div class="row">
                <div class="col-11">
                    <div class="position-relative">
                        <input class="ps-5 form-control rounded-pill" placeholder="Search Tuiter"/>
                        <i class="wd-search position-absolute fa fa-search"></i>
                    </div>
                </div>
                <div class="col-1">
                    <i class="fa-2x fa fa-cog pt-1 " style="color: #007FFF"></i>
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
                <li class="list-group-item">
                    <div class="row">
                        <div class="col-8 text-secondary">
                            <div>
                                Web Development
                            </div>
                            <div class="fw-bolder">
                                React JS - 2hr
                            </div>
                            <div class="fw-bolder">
                                React.js is a single page Application framework
                            </div>
                        </div>
                        <div class="col-4">
                            <img class="float-end" src="../../images/react.jpg" width="100px">
                        </div>
                    </div>
                </li>
            </ul>


            <ul class="list-group">
                <li class="list-group-item">
                    <div class="row">
                        <div class="col-8 text-secondary">
                            <div class="fw-bolder">
                                JavaScript - 2hr
                            </div>
                            <div class="fw-bolder">
                                JavaScript is a programming language that can be run on browsers as well as desktops
                            </div>
                            <div>
                                123k Tweets
                            </div>
                        </div>
                        <div class="col-4">
                            <img class="float-end" src="../../images/js.jpg" width="100px">
                        </div>
                    </div>
                </li>
            </ul>

            <ul class="list-group">
                <li class="list-group-item">
                    <div class="row">
                        <div class="col-8 text-secondary">
                            <div >
                                Web Development
                            </div>
                            <div class="fw-bolder">
                                jQuery
                            </div>
                            <div>
                                123k Tweets
                            </div>
                        </div>
                        <div class="col-4">
                            <img class="float-end" src="../../images/jquery.jpg" width="100px">
                        </div>
                    </div>
                </li>
            </ul>

            <ul class="list-group">
                <li class="list-group-item">
                    <div class="row">
                        <div class="col-8 text-secondary">
                            <div >
                                Web Development
                            </div>
                            <div class="fw-bolder">
                                NodeJS - 2h
                            </div>
                            <div>
                                123k Tweets
                            </div>
                        </div>
                        <div class="col-4">
                            <img class="float-end" src="../../images/nodejs.jpg" width="100px">
                        </div>
                    </div>
                </li>
            </ul>


        </div>
        <div class="col-10 d-none d-md-block d-lg-none">

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
                <li class="list-group-item">
                    <div class="row">
                        <div class="col-8 text-secondary">
                            <div>
                                Web Development
                            </div>
                            <div class="fw-bolder">
                                React JS - 2hr
                            </div>
                            <div class="fw-bolder">
                                React.js is a single page Application framework
                            </div>
                        </div>
                        <div class="col-4">
                            <img class="float-end" src="../../images/react.jpg" width="100px">
                        </div>
                    </div>
                </li>
            </ul>


            <ul class="list-group">
                <li class="list-group-item">
                    <div class="row">
                        <div class="col-8 text-secondary">
                            <div class="fw-bolder">
                                JavaScript - 2hr
                            </div>
                            <div class="fw-bolder">
                                JavaScript is a programming language that can be run on browsers as well as desktops
                            </div>
                            <div>
                                123k Tweets
                            </div>
                        </div>
                        <div class="col-4">
                            <img class="float-end" src="../../images/js.jpg" width="100px">
                        </div>
                    </div>
                </li>
            </ul>

            <ul class="list-group">
                <li class="list-group-item">
                    <div class="row">
                        <div class="col-8 text-secondary">
                            <div >
                                Web Development
                            </div>
                            <div class="fw-bolder">
                                jQuery
                            </div>
                            <div>
                                123k Tweets
                            </div>
                        </div>
                        <div class="col-4">
                            <img class="float-end" src="../../images/jquery.jpg" width="100px">
                        </div>
                    </div>
                </li>
            </ul>

            <ul class="list-group">
                <li class="list-group-item">
                    <div class="row">
                        <div class="col-8 text-secondary">
                            <div >
                                Web Development
                            </div>
                            <div class="fw-bolder">
                                NodeJS - 2h
                            </div>
                            <div>
                                123k Tweets
                            </div>
                        </div>
                        <div class="col-4">
                            <img class="float-end" src="../../images/nodejs.jpg" width="100px">
                        </div>
                    </div>
                </li>
            </ul>


        </div>
        <div class="col-10 d-block d-md-none">

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
            </ul>

            <div class="position-relative">
                <img src="../../images/spaceX.jpg" width="100%"/>
                <h1 class="position-absolute bottom-0 left-0 text-white">SpaceX's Starship</h1>
            </div>
            <ul class="list-group">
                <li class="list-group-item">
                    <div class="row">
                        <div class="col-8 text-secondary">
                            <div>
                                Web Development
                            </div>
                            <div class="fw-bolder">
                                React JS - 2hr
                            </div>
                            <div class="fw-bolder">
                                React.js is a single page Application framework
                            </div>
                        </div>
                        <div class="col-4">
                            <img class="float-end" src="../../images/react.jpg" width="100px">
                        </div>
                    </div>
                </li>
            </ul>


            <ul class="list-group">
                <li class="list-group-item">
                    <div class="row">
                        <div class="col-8 text-secondary">
                            <div class="fw-bolder">
                                JavaScript - 2hr
                            </div>
                            <div class="fw-bolder">
                                JavaScript is a programming language that can be run on browsers as well as desktops
                            </div>
                            <div>
                                123k Tweets
                            </div>
                        </div>
                        <div class="col-4">
                            <img class="float-end" src="../../images/js.jpg" width="100px">
                        </div>
                    </div>
                </li>
            </ul>

            <ul class="list-group">
                <li class="list-group-item">
                    <div class="row">
                        <div class="col-8 text-secondary">
                            <div >
                                Web Development
                            </div>
                            <div class="fw-bolder">
                                jQuery
                            </div>
                            <div>
                                123k Tweets
                            </div>
                        </div>
                        <div class="col-4">
                            <img class="float-end" src="../../images/jquery.jpg" width="100px">
                        </div>
                    </div>
                </li>
            </ul>

            <ul class="list-group">
                <li class="list-group-item">
                    <div class="row">
                        <div class="col-8 text-secondary">
                            <div >
                                Web Development
                            </div>
                            <div class="fw-bolder">
                                NodeJS - 2h
                            </div>
                            <div>
                                123k Tweets
                            </div>
                        </div>
                        <div class="col-4">
                            <img class="float-end" src="../../images/nodejs.jpg" width="100px">
                        </div>
                    </div>
                </li>
            </ul>


        </div>


        ${WhoToFollowList()}


    </div>
   `);
}
$(exploreComponent);