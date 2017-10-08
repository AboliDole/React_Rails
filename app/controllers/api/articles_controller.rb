module Api
  class ArticlesController < ApplicationController
    before_action :set_article, only: [:update, :destroy]

    def index
      render json: Article.all
    end

    def create
      article = Article.new(article_params)
      if article.save
        render json: article
      else
        render nothing: true, status: :bad_request
      end
   end


    def update
      if @article.update(article_params)
        render json: @article
      else
        render nothing: true, status: :unprocessable_entity
      end
    end


      def search
        query = params[:query]
        articles = Article.where('title LIKE ? OR description LIKE ? OR author LIKE ?',
                             "%#{query}%", "%#{query}%", "%#{query}%")
        render json: articles
     end



     def destroy
        @article.destroy
        head :no_content
     end



    private

    def article_params
      params.require(:article).permit(:title, :description, :author, :tags, :article_date)
    end

    def set_article
      @article = Article.find(params[:id])
    end

  end
end
