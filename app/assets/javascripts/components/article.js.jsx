var Article = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    description: React.PropTypes.string,
    author: React.PropTypes.string,
    tags: React.PropTypes.string,
    article_date: React.PropTypes.string
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
      </tr>
    )
  }
});
