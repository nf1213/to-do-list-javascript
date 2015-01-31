require "sinatra"
require "sinatra/activerecord"
require "sinatra/reloader"

configure do
  set :views, 'app/views'
end

Dir[File.join(File.dirname(__FILE__), 'app', '**', '*.rb')].each do |file|
  require file
  also_reload file
end

get '/' do
  @items = Item.all
  erb :index
end
