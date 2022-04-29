
// fetach All Posts
export const  fetchPosts = () => (
    $.ajax({
      url: 'api/posts'
    })
)

export const createPost = (formData)=> {
  // debugger
  return $.ajax({
    url: 'api/posts',
    method: 'POST',
    data: formData,
    contentType: false,
    processData: false
  })
}

export const updatePost = (post) =>{
  debugger
  return $.ajax({
    url: `api/posts/${post.id}`,
    method: 'PATCH',
    data: {post}
  })
}


export const deletePost = (postId) =>{

  return $.ajax({
    url: `api/posts/${postId}`,
    method: 'DELETE'
  })
}
