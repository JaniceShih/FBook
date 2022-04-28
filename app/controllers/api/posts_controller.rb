class Api::PostsController < ApplicationController
    def index
        @posts = Post.all
        render :index
    end

    # def show
    #     @post = Post.find(params[:id])
    #     render :index
    # end

    def create
        @post = Post.new(post_params)

        if @post.save!
            render :index
        else
            redner json: @post.errors.full_messages, status: 422
        end
    end

    private
    def post_params
        params.require(:post).params(:body, :user_id )
    end
end