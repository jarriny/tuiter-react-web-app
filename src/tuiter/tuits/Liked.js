import React from "react";
const Liked = (
    {
        post // = { userName: 'NASA', handle: 'NASA', avatarIcon: 'nasa.png' }
    }
) => {
    if(post.liked){
        return(
            <i className="bi bi-heart-fill icon-red pt-1"></i>
        )
    }

    return(
        <i className="bi bi-heart pt-1"></i>

    );
};
export default Liked;

