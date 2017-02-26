# use all gem, installed by bundler
Bundler.require

require 'sinatra/reloader' if development?

# module
register React::Sinatra

set :views, File.join(__dir__, 'views')
set :public_folder, 'public'
set format: :html5

get '/' do
  slim :'react-component', layout: true
end
