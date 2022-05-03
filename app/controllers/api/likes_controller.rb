class Api::LikesController < ApplicationController

    skip_before_action :verify_authenticity_token

    def index
        @likes = Like.all
        # debugger
        render :index
    end

    def show
        @like = Like.find_by(id: params[:id])
        # debugger
        render :show
    end

    def create
        # debugger
        @like = Like.new(like_params)       
        if @like.save!
            # debugger
            render :show
        else
            redner json: @like.errors.full_messages, status: 422
        end
    end

    def update
        @like = Like.find(params[:id])
    
        if @like.update(like_params)
          render :show
        else
          render json: @like.errors.full_messages, status: 422
        end
      end

    def destroy 
        @like = Like.find(params[:id])

        if @like.destroy
          render :show
        else
          render json: @like.errors.full_messages, status: 422
        end

    end

    private
    def like_params
      params.require(:Like).permit(:body, :user_id, :post_id)
    end


end
