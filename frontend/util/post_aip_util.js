
// fetach All Posts
export const  fetchPosts = () => (
    $.ajax({
      url: 'api/posts'
    })
)