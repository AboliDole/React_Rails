Rails.application.routes.draw do
  root 'dashboard#index'
  namespace :api do
    resources :articles
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end