import React from 'react';
import github_icon from '../images/github-logo.png';

import '../styles/LeftSideBar.css';

class LeftSideBar extends React.Component {
	render() {
		return(
			<div className="leftsb-container">
				<div className="github-container">
					<img className="github-icon" src={github_icon} />
				</div>
			</div>
		);
	}
}

export default LeftSideBar;