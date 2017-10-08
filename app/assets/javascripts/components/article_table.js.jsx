var ArticleTable = React.createClass({
handleDeleteRecord: function(article) {
   this.props.handleDeleteRecord(article);
 },

 handleUpdateRecord: function(old_article, article) {
    this.props.handleUpdateRecord(old_article, article);
  },

  render: function() {
    var articles = [];

   this.props.articles.forEach(function(article) {
     articles.push(<Article article={article}
                        key={'article' + article.id}
                         handleDeleteRecord=
                         {this.handleDeleteRecord}
                         handleUpdateRecord=
                         {this.handleUpdateRecord} />);
   }.bind(this));
    return(
      <table className="table table-striped">
        <thead>
          <tr>
            <th className="col-md-3">Title</th>
            <th className="col-md-12">Description</th>
            <th className="col-md-1">Author</th>
            <th className="col-md-2">Tags</th>
             <th className="col-md-2">Date</th>
             <th className="col-md-2">Actions</th>

          </tr>
        </thead>
        <tbody>
          {articles}
        </tbody>
      </table>
    )
  }
});
