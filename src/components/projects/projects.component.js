import { h } from "preact";
import style from "./projects.style.less";

const Projects = props => {
	// props = {
	// 	name
	// 	summary
	// 	url
	// 	imageUrl
	// }
	return (
		<div class={style.projects}>
			<h1 class={style.projects__title}>Projects</h1>
			<div class={style.projects__container}>
				{props.projects.map(project => (
					<div>
						<a href={project.url}>
							<div class={style.projects__container__image__placeholder}>
								<div class={style.projects__container__image__placeholder__content}>
									<h1>{project.name}</h1>
									<p>{project.summary}</p>
								</div>
								<img
									src={project.imageUrl}
									class={style.projects__container__image}
								/>
							</div>
						</a>
					</div>
				))}
			</div>
		</div>
	);
};

export default Projects;
