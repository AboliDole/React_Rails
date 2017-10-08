var Article = React.createClass({
  getInitialState: function() {
    return { edit: false };
  },
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

   handleToggle: function(e) {
     e.preventDefault();
     this.setState({ edit: !this.state.edit });
 },

 recordValue: function(field) {
   return ReactDOM.findDOMNode(this.refs[field]).value;
 },

 handleUpdate: function(e) {
 e.preventDefault();
 if (this.validRecord()) {
   var article_data = {
     title: this.recordValue("title"),
     description: this.recordValue("description"),
     author: this.recordValue("author"),
     tags: this.recordValue("tags"),
     date: this.recordValue("article_date"),
   };
   $.ajax({
     method: 'PUT',
     url: '/api/articles/' + this.props.article.id,
     data: { article: article_data },
     success: function(data) {
       this.props.handleUpdateRecord(this.props.article, data);
       this.setState({ edit: false });
     }.bind(this),
     error: function(xhr, status, error) {
       alert('Cannot update requested record: ', error);
     }
   });
 } else {
   alert('Please fill all fields.');
 }
},

validRecord: function() {
  if (this.recordValue("title") &&
      this.recordValue("description") &&
      this.recordValue("author") &&
      this.recordValue("tags") &&
      this.recordValue("article_date"))
      {
    return true;
  } else {
    return false;
  }
},

 renderForm: function() {
    return(
      <tr>
        <td>
          <input title="title"
                 defaultValue={this.props.article.title}
                 className="form-control"
                 type="text"
                 ref="title"
          />
        </td>
        <td>
          <input name="description"
                 defaultValue={this.props.article.description}
                 className="form-control"
                 type="text"
                 ref="description"
          />
        </td>
        <td>
          <input name="author"
                 defaultValue={this.props.article.author}
                 className="form-control"
                 type="text"
                 ref="author"
          />
        </td>
        <td>
          <input name="tags"
                 defaultValue={this.props.article.tags}
                 className="form-control"
                 type="text"
                 ref="tags"
          />
        </td>

        <td>
          <input name="article_date"
                 defaultValue={this.props.article.article_date}
                 className="form-control"
                 type="date"
                 ref="article_date"
          />
        </td>

        <td>
          <a className="btn btn-success btn-sm"
             onClick={this.handleUpdate}>
            Save
          </a>
          <a className="btn btn-default btn-sm"
             onClick={this.handleToggle} >
            Cancel
          </a>
        </td>
      </tr>
    );
  },

  renderRecord: function() {
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
          <a className="btn btn-primary btn-xs"
             onClick={this.handleToggle} >
             Edit
          </a>
        </td>
      </tr>
    );
  },


  render: function() {
   if (this.state.edit) {
     return(this.renderForm());
   } else {
     return(this.renderRecord());
   }
 }
});
