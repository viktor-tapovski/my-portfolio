import { h } from "preact";
import PropTypes from 'prop-types';
import style from "./profile-card.style.less";

const ProfileCard = ({ detail: { company, position, website, startDate, summary } }) => {
	// props = {
	//  company: string,
	// 	position: string,
	// 	website: string,
	// 	startDate: string,
	// 	summary: string,
	// 	highlights: [],
	// }
	return (
        <div>
            <li class={style.profile__card__item} data-date={startDate}>
                <h3>{company}</h3>
                <p><strong>{position}</strong></p>
                <p><i>{website}</i></p>
                <section>{summary}</section>
            </li>
        </div>
    );
};

ProfileCard.propTypes = {
	detail: PropTypes.object.isRequired
};

export default ProfileCard;
