class AddArticleDateToArticle < ActiveRecord::Migration[5.0]
  def change
    add_column :articles, :article_date, :date
  end
end
