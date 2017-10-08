var ArticleTable = React.createClass({
  render: function() {
    return(
      <table className="table table-striped">
        <thead>
          <tr>
            <th className="col-md-3">Title</th>
            <th className="col-md-3">Description</th>
            <th className="col-md-2">Author</th>
            <th className="col-md-2">Tags</th>
            <th className="col-md-2">Created_at</th>
            <th className="col-md-2">Updated_at</th>

          </tr>
        </thead>
        <tbody></tbody>
      </table>
    )
  }
});
