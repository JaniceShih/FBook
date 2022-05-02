# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

demoUser = User.create!(fname: 'Demo', lname: 'User', email: 'demo@gmail.com', birthday: '2002-02-5', gender: 'Female',  bio: '', password: '123456')

joe = User.create!(fname: 'Joe', lname: 'Delaney', email: 'joe@gmail.com', birthday: '1999-06-06', gender: 'Male',  bio: '', password: '123456')
dom = User.create!(fname: 'Dominic', lname: 'Swaby', email: 'dom@gmail.com', birthday: '1986-05-2', gender: 'Male',  bio: '', password: '123456')
jackson = User.create!(fname: 'Jackson', lname: 'Dooley', email: 'jackson@gmail.com', birthday: '2002-05-2', gender: 'Male',  bio: '', password: '123456')
kevin = User.create!(fname: 'Kevin', lname: 'Tung', email: 'kevin@gmail.com', birthday: '1992-05-2', gender: 'Male',  bio: '', password: '123456')
nick = User.create!(fname: 'Nicholas', lname: 'Angleton', email: 'nick@gmail.com', birthday: '1992-05-2', gender: 'Male',  bio: '', password: '123456')
naran = User.create!(fname: 'Naran', lname: 'Ivanchukov', email: 'naran@gmail.com', birthday: '1992-05-2', gender: 'Male',  bio: '', password: '123456')


Friend.create!(user_id: 1, friend_id: 2, status: "Friends")
Friend.create!(user_id: 1, friend_id: 3, status: "Friends")
Friend.create!(user_id: 1, friend_id: 4, status: "Friends")
Friend.create!(user_id: 1, friend_id: 5, status: "Friends")
Friend.create!(user_id: 1, friend_id: 6, status: "Friends")
Friend.create!(user_id: 1, friend_id: 7, status: "Friends")

Friend.create!(user_id: 2, friend_id: 3, status: "Friends")
Friend.create!(user_id: 2, friend_id: 3, status: "Friends")

Comment.create!(body: "Slack clone", user_id: 2, post_id: 5)
Comment.create!(body: "Splitwise clone", user_id: 3, post_id: 5)

