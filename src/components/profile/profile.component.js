import { h, Component } from 'preact';
import style from './profile.style.less';

export default class Profile extends Component {
	state = {
		count: 0
	};

	// update the current time
	updateTime = () => {
		let time = new Date().toLocaleString();
		this.setState({ time });
	};

	// gets called when this route is navigated to
	componentDidMount() {
		// start a timer for the clock:
		this.timer = setInterval(this.updateTime, 1000);
		this.updateTime();

		// every time we get remounted, increment a counter:
		this.setState({ count: this.state.count+1 });
	}

	// gets called just before navigating away from the route
	componentWillUnmount() {
		clearInterval(this.timer);
	}

	// Note: `user` comes from the URL, courtesy of our router
	// render({ user }, { time, count }) {
	render() {
		return (
			<div class={style.profile}>
				<h1>Timeline</h1>
				<p>Frontend Developer
					Company NameBarracuda FX
					Dates EmployedJan 2018 – Present
					Employment Duration2 yrs 2 mos
					Location: Macedonia
				</p>
				<section>
				Frontend Developer
					Company NamePersonal Programmer
					Dates EmployedApr 2016 – Jan 2018
					Employment Duration1 yr 10 mos
					LocationMacedonia
					Front-end developer at Internet Brands (https://www.nolo.com/)
				</section>
				<section>
				Web Designer
					Company NameRE:AKTIV
					Dates EmployedAug 2015 – Apr 2016
					Employment Duration9 mos
					LocationSkopje
					• Front end development utilizing HTML5, CSS3 and jQuery
					• Developing prototypes and high quality mock-ups
					• Create browser and platform compatible CSS
					• Front end web development for proprietary ASP / ASP.NET web apps.
				</section>
				<section>
				Graphic Designer
					Company NamePurecanvas.com
					Dates EmployedApr 2013 – May 2015
					Employment Duration2 yrs 2 mos
					LocationFreelance
					• Graphic design
					• UI/UX Design
					• Designed web and mobile app mock-ups
					• Branding
				</section>
				<section>
				Web Developer
					Company NameWebski Solutions
					Dates EmployedMay 2014 – Jul 2014
					Employment Duration3 mos
					LocationBitola, Macedonia
					• Created and maintained the front-end web apps using Javascript, HTML, CSS, PHP (Wordpress).
					• Implemented CMS and Ecommerce based dynamic sites with open source platforms such as Wordpress
				</section>
				<section>
				Freelance Web Developer
					Company NameEriden LLC
					Dates EmployedApr 2013 – Mar 2014
					Employment Duration1 yr
					LocationFreelance
					• Designed web-site and mobile app mock-ups
					• Implemented mock-ups and designs into working websites
					• Performed browser testing and debugging
					• Used technologies: HTML, CSS, Javascript, PHP(Wordpress)
				</section>
			</div>
		);
	}
}
