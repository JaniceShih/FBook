@posts.each do |post|
    json.set! post.id do
        json.extract! post, :id, :user_id, :body, :user_id, :created_at, :updated_at
        json.extract! post.user, :fname, :lname
  
        if post.photo.attached?
            json.photoUrl url_for(post.photo)
        end
        # debugger
        json.comments post.comments.each do |comment| 
            json.extract! comment, :id, :body
            json.extract! comment.user, :fname
        end
    end
    
end