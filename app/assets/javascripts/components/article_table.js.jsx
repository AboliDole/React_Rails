var ArticleTable = React.createClass({
  render: function() {
    var articles = [];
   this.props.articles.forEach(function(article) {
     articles.push(<Article article={article}
                        key={'article' + article.id}/>);
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

          </tr>
        </thead>
        <tbody>
          {articles}
        </tbody>
      </table>
    )
  }
});
