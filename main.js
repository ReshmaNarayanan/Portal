import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
ReactDOM.render(<App />,document.getElementById('app'));

/*var Panel = ReactBootstrap.Panel;
var FormGroup = ReactBootstrap.FormGroup;
var ControlLabel = ReactBootstrap.ControlLabel;
var FormControl = ReactBootstrap.FormControl;
var Button = ReactBootstrap.Button;
var mountNode = document.getElementById('example');

const formInstance = (
  <form>
    <FormGroup controlId="formControlsText">
      <ControlLabel>Text</ControlLabel>
      <FormControl type="text" placeholder="Enter text" />
    </FormGroup>
    <FormGroup controlId="formControlsPassword">
      <ControlLabel>Password</ControlLabel>
      <FormControl type="password" />
    </FormGroup>
    <Button type="submit">
      Submit
    </Button>
  </form>
);

ReactDOM.render(formInstance, mountNode);*/

/*class LikeButton extends React.Component {
  constructor() {
    super();
    this.state = {
      liked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({liked: !this.state.liked});
  }
  render() {
    const text = this.state.liked ? 'like' : 'haven\'t liked';
    return (
      <div onClick={this.handleClick}>
        You {text} this. Click to toggle.
      </div>
    );
  }
}

ReactDOM.render(
  <LikeButton />,
  document.getElementById('example')
);*/

/*var Avatar = React.createClass({
  render: function() {
    return (
      <div>
        <PagePic pagename={this.props.pagename} />
        <PageLink pagename={this.props.pagename} />
      </div>
    );
  }
});

var PagePic = React.createClass({
  render: function() {
    return (
      <img src={'https://graph.facebook.com/' + this.props.pagename + '/picture'} />
    );
  }
});

var PageLink = React.createClass({
  render: function() {
    return (
      <a href={'https://www.facebook.com/' + this.props.pagename}>
        {this.props.pagename}
      </a>
    );
  }
});

ReactDOM.render(
  <Avatar pagename="Engineering" />,
  document.getElementById('example')
);*/