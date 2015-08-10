var Commentbox = React.createClass({
  render: function(){
    return (
      <div createName="commentBox">
        Hello, world! I am a CommentBox.
      </div>
    );
  }
});

React.render(
  <CommentBox />,
  document.getElementById('content')
);