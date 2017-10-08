var Article = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    description: React.PropTypes.string,
    author: React.PropTypes.string,
    tags: React.PropTypes.string,
    article_date: React.PropTypes.string
  },

  handleDelete: function(e) {
      e.preventDefault();
    $.ajax({
     method: 'DELETE',
     url: '/api/articles/' + this.props.article.id,
     success: function(data) {
       this.props.handleDeleteRecord(this.props.article);
     }.bind(this),
     error: function(xhr, status, error) {
       alert('Cannot delete requested record: ', error);
     }
});

   },

  render: function() {
    var article = this.props.article;
    return(
      <tr>
        <td>{article.title}</td>
        <td>{article.description}</td>
        <td>{article.author}</td>
        <td>{article.tags}</td>
        <td>{article.article_date}</td>

        <td>
          <a className="btn btn-danger btn-xs"
             onClick={this.handleDelete} >
            Delete
          </a>
        </td>
      </tr>
    )
  }
});
