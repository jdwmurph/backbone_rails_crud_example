class UsersController < ApplicationController

  def index
    @users = User.all
    render json: @users.to_json
  end

  def create
    @user = User.create(user_params)
    render json: @user.to_json
  end

  def update
    @user = User.find(params[:id])
    @user.update(user_params)
    render json: @user.to_json
  end

  def destroy
    @user = User.delete(params[:id])
    render json: @user.to_json
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end

end
