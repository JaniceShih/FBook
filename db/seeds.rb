# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# demoUser = User.create!(fname: 'Demo', lname: 'User', email: 'demo@gmail.com', birthday: '2002-02-5', gender: 'Female',  bio: '', password: '123456')



Like.destroy_all
Comment.destroy_all
Post.destroy_all
Friend.destroy_all
User.destroy_all

demo = User.create!(fname: 'Demo', lname: 'User', email: 'demo@gmail.com', birthday: '1999-06-06', gender: 'Male',  bio: '', password: '123456')
joe = User.create!(fname: 'Joe', lname: 'Delaney', email: 'joe@gmail.com', birthday: '1999-06-06', gender: 'Male',  bio: '', password: '123456')
jackson = User.create!(fname: 'Jackson', lname: 'Dooley', email: 'jackson@gmail.com', birthday: '2002-05-2', gender: 'Male',  bio: '', password: '123456')
kevin = User.create!(fname: 'Kevin', lname: 'Tung', email: 'kevin@gmail.com', birthday: '1992-05-2', gender: 'Male',  bio: '', password: '123456')
nick = User.create!(fname: 'Nicholas', lname: 'Angleton', email: 'nick@gmail.com', birthday: '1992-05-2', gender: 'Male',  bio: '', password: '123456')
dom = User.create!(fname: 'Dominic', lname: 'Swaby', email: 'dom@gmail.com', birthday: '1992-05-2', gender: 'Male',  bio: '', password: '123456')


Friend.create!(user_id: demo.id, friend_id: joe.id , status: "Friends")
Friend.create!(user_id: demo.id, friend_id: jackson.id, status: "Friends")
Friend.create!(user_id: demo.id, friend_id: kevin.id, status: "Friends")
Friend.create!(user_id: demo.id, friend_id: nick.id, status: "Friends")
Friend.create!(user_id: demo.id, friend_id: dom.id, status: "Friends")


post1 = Post.create!(body: 'Starting coding', user_id: demo.id)
post2= Post.create!(body: 'Full Stack Project', user_id: demo.id)


commit1 = Comment.create!(body: "Slack clone", user_id: joe.id, post_id: post2.id)
commit2 = Comment.create!(body: "Splitwise clone", user_id: dom.id, post_id: post2.id)


Like.create!(like_id: post1.id, like_type: "Post", user_id: demo.id)
Like.create!(like_id: post1.id, like_type: "Post", user_id: joe.id)
Like.create!(like_id: post1.id, like_type: "Post", user_id: dom.id)
Like.create!(like_id: commit1.id, like_type: "Comment", user_id: dom.id)
Like.create!(like_id: commit2.id, like_type: "Comment", user_id: dom.id)

