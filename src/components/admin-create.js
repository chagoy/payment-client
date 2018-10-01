import React from 'react';
import { connect } from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import TeamForm from './team-form';
import SeasonForm from './season-form';
import GameForm from './game-form';
import { getAllTeams } from '../actions/teams';
require('./admin-create.css')

class AdminCreate extends React.Component {
	componentDidMount() {
		if (this.props.loggedIn) {
			return <Redirect to="/" />;
		} else {
			return this.props.dispatch(getAllTeams())
		}
	}	

	render() {
		let gameForm = this.props.teams.length > 0 ? <GameForm /> : 'Waiting for teams...';
		return (
			<div className="create">
				<TeamForm />
				<SeasonForm />
				{gameForm}
			</div>
		)
	}
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null,
	teams: state.team.teams
})

export default connect(mapStateToProps)(AdminCreate);