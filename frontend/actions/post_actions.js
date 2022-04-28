import * as PostApiUtil from '../util/post_aip_util';


export const RECEIVE_ALL_POST = 'RECEIVE_ALL_POST';

export const RECEIVE_POST = 'RECEIVE_POST';

const receivePosts = (posts) => ({
    type: RECEIVE_ALL_POST,
    posts
  });
const receivePost = (post) =>({
    type: RECEIVE_POST,
    post
})


  
export const fetchPosts = () => dispatch =>(
    PostApiUtil.fetchPosts().then(
        posts=> dispatch(receivePosts(posts))
    )
)

export const createPost = (post) => dispatch =>(
    PostApiUtil.createPost(post).then(
        post => dispatch(receivePost(post))
    )
)


