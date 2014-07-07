Rails.application.routes.draw do

  get    'users' => 'users#index'
  post   'users' => 'users#create'
  put    'users/:id' => 'users#update'
  delete 'users/:id' => 'users#destroy'
end
