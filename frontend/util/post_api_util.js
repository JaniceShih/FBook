
// fetach All Posts
export const  fetchPosts = () => (
    $.ajax({
      url: '/api/posts'
    })
)

export const createPost = (formData)=> {
  // debugger
  return $.ajax({
    url: '/api/posts',
    method: 'POST',
    data: formData,
    contentType: false,
    processData: false
  })
}

export const updatePost = (formData) =>{
  // debugger
  return $.ajax({
    url: `/api/posts/${parseInt(formData.get('post[id]'))}`,
    method: 'PATCH',
    data: formData,
    contentType: false,
    processData: false
  })
}


export const deletePost = (postId) =>{

  return $.ajax({
    url: `/api/posts/${postId}`,
    method: 'DELETE'
  })
}
