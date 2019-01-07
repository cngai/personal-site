import React from 'react';
import github_icon from '../images/github-logo.png';
import linkedin_icon from '../images/linkedin-logo.png';
import flickr_icon from '../images/flickr-logo.png';

import '../styles/RightSideBar.css';

class RightSideBar extends React.Component {
	render() {
		return(
			<div className="rightsb-container">
				<div className="icon-container">
					<a href="#">
						<img className="linkedin-icon" src={linkedin_icon}  />
					</a>
					<a href="#">
						<img className="github-icon" src={github_icon} />
					</a>
					<a href="#">
						<img className="flickr-icon" src={flickr_icon} href="#" />
					</a>
				</div>
			</div>
		);
	}
}

export default RightSideBar;