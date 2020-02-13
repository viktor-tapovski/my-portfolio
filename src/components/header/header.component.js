import { h, Component } from 'preact';
import { Link } from 'preact-router';
import style from './header.style.less';

export default class Header extends Component {
	render() {
		return (
			<header class={style.header}>
				{/* <h1>My Portfolio</h1> */}
				<nav>
					<Link href="/">Home</Link>
					<Link href="/profile">Portfolio</Link>
					<Link href="/projects">Projects</Link>
				</nav>
			</header>
		);
	}
}
