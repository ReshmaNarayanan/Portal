import React from 'react';
import ReactDOM from 'react-dom';

//creating a react component
class App extends React.Component {
	constructor () {
		super();
		this.state = {
			firstName : 'Enter your first name',
			middleName : 'Enter your middle name',
			lastName : 'Enter your last name'
		};
		this.update = this.update.bind(this);
	}
	update(e) {
		this.setState({
			firstName : ReactDOM.findDOMNode(this.refs.firstName.refs.name).value,
			middleName : ReactDOM.findDOMNode(this.refs.middleName.refs.name).value,
			lastName : ReactDOM.findDOMNode(this.refs.lastName.refs.name).value
		})
	}
	render() {
		return (
			<div>
				<Widget ref="firstName" update={this.update} />
					{this.state.firstName}
					<br />
				<Widget ref="middleName" update={this.update} />
					{this.state.middleName}
					<br />
				<Widget ref="lastName" update={this.update} />
					{this.state.lastName}

				<br />
				I <Heart /> React
			</div>
		);
	}
}

class Widget extends React.Component {
	render() {
		return (
			<div>
				<input ref="name" type="text" onChange={this.props.update}/> 
			</div>
		)
	}
}

const Heart = () => <span className="glyphicon glyphicon-heart"></span>

//assigning prop types and default values
/*App.propTypes = {
	txt : React.PropTypes.string,
	cat : React.PropTypes.number.isRequired
}
App.defaultProps = {
	txt : "This is a default prop value!"
}*/

//rendering the react component
//const App = () => <div>Hello Girls</div>
ReactDOM.render(<App />,document.getElementById('app'));