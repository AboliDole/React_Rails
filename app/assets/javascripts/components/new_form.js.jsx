var NewForm = React.createClass({
propTypes: {
  title: React.PropTypes.string,
  description: React.PropTypes.string,
  author: React.PropTypes.string,
  tags: React.PropTypes.string,
  article_date: React.PropTypes.string
},
  getInitialState: function() {
    return {
      title: '',
      description: '',
      author: '',
      tags: '',
      article_date: ''
    }
  },
  handleAdd: function(e) {
    e.preventDefault();
    var self = this;
    if (this.validForm()) {
      $.ajax({
        url: '/api/articles',
        method: 'POST',
        data: { article: self.state },
        success: function(data) {
          self.props.handleAdd(data);
          self.setState(self.getInitialState());
        },
        error: function(xhr, status, error) {
          alert('Cannot add a new record: ', error);
        }
      })
    } else {
      alert('Please fill all fields.');
    }
  },
  validForm: function() {
    if (this.state.title && this.state.description &&
        this.state.author && this.state.tags && this.state.article_date) {
      return true;
    } else {
      return false;
    }
  },
  handleChange: function(e) {
    var input_name = e.target.name;
    var value = e.target.value;
    this.setState({ [input_name] : value });
  },

  render: function() {
    return(
      <form className="form-inline" onSubmit={this.handleAdd}>
        <div className="form-group">
          <input type="text"
                 className="form-control"
                 name="title"
                 placeholder="Title"
                 ref="title"
                 value={this.state.title}
                onChange={this.handleChange}
                 />
        </div>
        <div className="form-group">
          <input type="text"
                 className="form-control"
                 name="description"
                 placeholder="description"
                 ref="description"
                 value={this.state.description}
                onChange={this.handleChange}
                  />
        </div>

        <div className="form-group">
          <input type="text"
                 className="form-control"
                 name="author"
                 placeholder="Author"
                 ref="author"
                 value={this.state.author}
                onChange={this.handleChange}
                  />
        </div>

        <div className="form-group">
          <input type="text"
                 className="form-control"
                 name="tags"
                 placeholder="Tags"
                 ref="tags"
                 value={this.state.tags}
                onChange={this.handleChange}
                 />
        </div>

        <div className="form-group">
          <input type="date"
                 className="form-control"
                 name="article_date"
                 placeholder="Article date"
                 ref="article_date"
                 value={this.state.article_date}
                onChange={this.handleChange}
                  />
        </div>
        <button type="submit" className="btn btn-primary">Add</button>
      </form>
    )
  }
});
