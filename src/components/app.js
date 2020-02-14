import { h, Component } from 'preact';
import { Router } from 'preact-router';

// Components
import Header from './header/header.component';
import Home from './home/home.component';
import Profile from './profile/profile.component';
import Projects from './projects/projects.component';

// Linkedin data
import * as dataService from '../data/resume.json';

export default class App extends Component {
	
	state = {
		data: dataService
	};

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		const { basics, work, skills, projects } = this.state.data;
		return (
			<div id="app">
				<Header onScroll={this.headerClass} />
				<Router onChange={this.handleRoute}>
					<Home path="/" basics={basics} />
					<Profile path="/profile/" work={work} />
					<Projects path="/projects/" projects={projects} />
				</Router>
			</div>
		);
	}
} 
