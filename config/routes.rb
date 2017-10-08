Rails.application.routes.draw do
  root 'dashboard#index'
  namespace :api do
    resources :articles, only: [:index, :create, :destroy] do
      get :search, on: :collection
    end
  end
end
