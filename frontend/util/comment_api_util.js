
// fetach All Comment
export const  fetchComments = () => (
    $.ajax({
      url: 'api/comments'
    })
)

export const createComment = (comment)=> {
  // debugger
  return $.ajax({
    url: 'api/comments',
    method: 'POST'
  })
}

export const updateComment = (comment) =>{
  // debugger
  return $.ajax({
    url: `api/comments/${comment.id}`,
    method: 'PATCH'
  })
}


export const deleteComment = (commentId) =>{

  return $.ajax({
    url: `api/comments/${commentId}`,
    method: 'DELETE'
  })
}
