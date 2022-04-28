import * as PostApiUtil from '../util/post_aip_util';


export const RECEIVE_ALL_POST = 'RECEIVE_ALL_POST';

export const receivePosts = (posts) => ({
    type: RECEIVE_ALL_POST,
    posts
  });

  
export const fetchPosts = () => dispatch =>(
    PostApiUtil.fetchPosts().then(
        posts=> dispatch(receivePosts(posts))
    )
)

