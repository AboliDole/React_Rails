var ArticleApplication = React.createClass({
  render: function() {
    return(
      <div className="container">
        <div className="jumbotron">
          <h1>React_Rails CC</h1>
          <p>by:Aboli Dole</p>
        </div>

        <div className="row">
          <div className="col-md-12">
            <ArticleTable />
          </div>
        </div>
      </div>
        )
      }
    });
