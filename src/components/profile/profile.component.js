import { h } from "preact";
import ProfileCard from "./profile-card/profile-card.component";
import style from "./profile.style.less";

const Profile = props => {
	// props = {
	//  company: string,
	// 	position: string,
	// 	website: string,
	// 	startDate: string,
	// 	summary: string,
	// 	highlights: [],
	// }
	return (
		<div class={style.profile}>
			<h1 class={style.profile__title}>Timeline</h1>
			<ul class={style.profile__timeline}>
				{props.work.map(detail => (
					<ProfileCard detail={detail} />
				))}
			</ul>
		</div>
	);
};

export default Profile;
