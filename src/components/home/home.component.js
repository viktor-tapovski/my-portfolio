import { h } from "preact";
import style from "./home.style.less";


const Home = props => {

	const { name, label } = props.basics;
	const mailLink = btoa("info@codeflair.ch");
	
	function handleMailClick(e) {
		e.preventDefault();
		window.location.href = `mailto:${atob(mailLink)}`;
	}
	
	return (
		<div class={style.page__home}>
			<div class={style.content__bio}>
				<button type="submit" class={style.content__bio__button__contact} onClick={handleMailClick}>
					Hello <span>World</span>
				</button>
				<h1 class={style.content__bio__title}>I'm {name}</h1>
				<p>{label}</p>
			</div>
			<div class={style.content__bio__hero__image}></div>
		</div>
	);
}; 

export default Home;
