import React from "react";

const NavigationSidebar = (
    {
        active = 'explore'
    }
) => {
    return (
        <body>
        <div className="list-group">
            <a className="list-group-item">Tuiter</a>
            <a className={`list-group-item
                    ${active === 'home'?'active':''}`}>
                <div className="row">
                    <div className="col-2">
                        <i className="bi bi-house-door-fill pt-1"></i>
                    </div>
                    <div className="col-10">
                        Home
                    </div>
                </div>
            </a>
            <a className={`list-group-item
                    ${active === 'explore'?'active':''}`}>
                <div className="row">
                    <div className="col-2">
                        <i className=" bi bi-hash pt-1"></i>
                    </div>
                    <div className="col-10">
                        Explore
                    </div>
                </div>
            </a>
            <a className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
                <div className="row">
                    <div className="col-2">
                        <i className=" bi bi-bell-fill pt-1"></i>
                    </div>
                    <div className="col-10">
                        Notifications
                    </div>
                </div>
            </a>
            <a className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
                <div className="row">
                    <div className="col-2">
                        <i className=" bi bi-envelope-fill pt-1"></i>
                    </div>
                    <div className="col-10">
                        Messages
                    </div>
                </div>
            </a>
            <a className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
                <div className="row">
                    <div className="col-2">
                        <i className=" bi bi-bookmark-fill pt-1"></i>
                    </div>
                    <div className="col-10">
                        Bookmarks
                    </div>
                </div>
            </a>
            <a className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
                <div className="row">
                    <div className="col-2">
                        <i className=" bi bi-list-task pt-1"></i>
                    </div>
                    <div className="col-10">
                        Lists
                    </div>
                </div>
            </a>
            <a className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
                <div className="row">
                    <div className="col-2">
                        <i className=" bi bi-person-fill pt-1"></i>
                    </div>
                    <div className="col-10">
                        Profile
                    </div>
                </div>
            </a>
            <a className={`list-group-item
                    ${active === 'more'?'active':''}`}>
                <div className="row">
                    <div className="col-2">
                        <i className=" bi bi-info-circle-fill pt-1"></i>
                    </div>
                    <div className="col-10">
                        More
                    </div>
                </div>
            </a>
        </div>
        </body>
    );
};
export default NavigationSidebar;