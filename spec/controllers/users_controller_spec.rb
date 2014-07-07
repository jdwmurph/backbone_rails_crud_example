require 'rails_helper'

RSpec.describe UsersController, :type => :controller do

  describe 'given a user' do
    before :each do
      @andre = User.new()
      @andre.email = 'test@test.com'
      @andre.password = 'test'
      @andre.save
    end

    describe 'GET /users' do
    before :each do
      get :index
    end

      it 'responds successfully' do
        expect(response.code).to eq('200')
      end

      it 'assigns @users to all the users' do
        expect(assigns(:users)).to eq(User.all)
      end

    end
  end

end
