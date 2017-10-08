module Api
  class ArticlesController < ApplicationController
    def index

        render json: Article.all
    end

    def create
      article = Article.new(event_params)
      if article.save
        render json: article
      else
        render nothing: true, status: :bad_request
      end
   end


      def search
        query = params[:query]
        articles = Article.where('title LIKE ? OR description LIKE ? OR author LIKE ?',
                             "%#{query}%", "%#{query}%", "%#{query}%")
        render json: articles
     end



    private

    def event_params
      params.require(:article).permit(:title, :description, :author, :tags, :article_date)
    end

  end
end
