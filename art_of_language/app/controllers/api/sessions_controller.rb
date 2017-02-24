class Api::SessionsController < ApplicationController

	def create
		puts 'here'
		@user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
		puts(@user)

		if @user
			login(@user)
			render "api/users/show"
		else
			render(
        json: ["Invalid username/password combination"],
        status: 401
      )
		end
	end

	def destroy
		@user = current_user
		if @user
			logout
			render "api/users/show"
		else
			render(
        json: ["Nobody signed in"],
        status: 404
      )
		end
	end

end
