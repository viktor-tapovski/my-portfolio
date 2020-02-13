import { h } from 'preact';
import style from './home.style.less';

export default () => {
	return (
		<div class={style.page__home}>
			<div class={style.content__bio}>
				<button class={style.content__bio__button__contact}>Hello <span>World</span></button>
				<h1 class={style.content__bio__title}>I'm Viktor</h1>
				<p>Detail-oriented front-end developer with a passion for excellence. I am a conscientious, self-taught learner who develops Web solutions using the best practices. I’m comfortable working with the latest front end technologies to develop well-designed web and mobile solutions.
				My goal is to plan, build, test, deploy and maintain websites and web applications. I am eager to learn new things and I strive for continued excellence.
				I have an ability to grow with a job, handle responsibility and build positive relationships with work colleagues at all levels. I take great pride and responsibility in my work and I always strive to learn new technologies to expand and improve my knowledge.
				</p>
			</div>
			<div class={style.content__bio__hero__image}></div>
		</div>
	);
};
