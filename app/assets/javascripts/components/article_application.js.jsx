var ArticleApplication = React.createClass({
  getInitialState: function() {
     return { articles: [] };
   },
   componentDidMount: function() {
     this.getDataFromApi();
   },
   getDataFromApi: function() {
     var self = this;
     $.ajax({
       url: '/api/articles',
       success: function(data) {
         self.setState({ articles: data });
       },
       error: function(xhr, status, error) {
         alert('Cannot get data from API: ', error);
       }
     });
   },

   handleSearch: function(articles) {
      this.setState({ articles: articles });
    },
    handleAdd: function(article) {
       var articles = this.state.articles;
       articles.push(article);
       this.setState({ articles: articles });
     },

     handleDeleteRecord: function(article) {
       var articles = this.state.articles.slice();
       var index = articles.indexOf(article);
       articles.splice(index, 1);
       this.setState({ articles: articles });
   },

  render: function() {
    return(
      <div className="container">
        <div className="jumbotron">
          <h1>React_Rails CC</h1>
          <p>by:Aboli Dole</p>
        </div>

        <div className="row">
          <div className="col-md-4">
            <SearchForm handleSearch={this.handleSearch} />
          </div>

          <div className="col-md-8">
           <NewForm handleAdd={this.handleAdd} />
         </div>
       </div>

        <div className="row">
          <div className="col-md-12">
            <ArticleTable articles={this.state.articles}
                   handleDeleteRecord=
                   {this.handleDeleteRecord} />

          </div>
        </div>
      </div>
        )
      }
    });
