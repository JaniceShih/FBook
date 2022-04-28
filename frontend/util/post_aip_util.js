
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
