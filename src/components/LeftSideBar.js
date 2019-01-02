import React from 'react';
import github_icon from '../images/github-logo.png';
import linkedin_icon from '../images/linkedin-logo.png';
import flickr_icon from '../images/flickr-logo.png';

import '../styles/LeftSideBar.css';

class LeftSideBar extends React.Component {
	render() {
		return(
			<div className="leftsb-container">
				<div className="icon-container">
					<img className="linkedin-icon" src={linkedin_icon} />
					<img className="github-icon" src={github_icon} />
					<img className="flickr-icon" src={flickr_icon} />
				</div>
			</div>
		);
	}
}

export default LeftSideBar;