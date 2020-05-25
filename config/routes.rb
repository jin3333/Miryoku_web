Rails.application.routes.draw do
  root 'tops#index'

  get "menu/index" => "menu#index"
  get "sisterstore/index" => "sisterstore#index"
  get "storeinfo/index" => "storeinfo#index"
  get "passion/index" => "passion#index"
  get "staff/index" => "staff#index"
end

