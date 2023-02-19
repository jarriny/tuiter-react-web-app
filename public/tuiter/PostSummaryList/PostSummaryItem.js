
const PostSummaryItem = (post) => {
    let tweets;
    if(post.tweets === undefined){
        console.log('got here')
        post.tweets = 0
        tweets = '';
    }
    else{
        tweets = post.tweets + ' tweets';
    }

    return(`
    <li class="list-group-item ">
                    <div class="row">
                        <div class="col-8 text-secondary text-white">
                            <div>
                                ${post.topic}
                            </div>
                            <div class="fw-bolder">
                                ${post.userName}
                                -
                                ${post.time}
                            </div>
                            <div class="fw-bolder">
                                ${post.title}
                            </div>
                            <div>
                                ${tweets}
                            </div>
                        </div>
                        <div class="col-4">
                            <img class="float-end" src= "${post.image}" width="100px">
                        </div>
                    </div>
                </li>`
    );
}
export default PostSummaryItem;

