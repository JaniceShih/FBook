class Api::PostsController < ApplicationController
    def index
        @posts = Post.all
        render :index
    end

    private
    def post_params
        params.require(:post).params(:body)
    end
end