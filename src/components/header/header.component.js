import { h } from "preact";
import { Link } from "preact-router";
import style from "./header.style.less";

const Header = () => {
	return (
		<header class={style.header}>
			{/* <h1>My Portfolio</h1> */}
			<nav>
				<Link activeClassName="active" href="/">Home</Link>
				<Link activeClassName="active" href="/profile">Portfolio</Link>
				<Link activeClassName="active" href="/projects">Projects</Link>
			</nav>
		</header>
	);
};

export default Header;
