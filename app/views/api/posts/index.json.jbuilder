json.array! @posts do |post|
    # json.extract! post, :id, :body, :updated_at
    # json.photoUrl url_for(post.photo)


    json.set! post.id do
        json.extract! post, :id, :user_id, :body, :user_id, :created_at, :updated_at
        json.extract! post.user, :fname, :lname


        if post.photo.attached?
            json.photoUrl url_for(post.photo)
        end
    end
end