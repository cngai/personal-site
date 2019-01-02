import React from 'react';
import Navigation from './Navigation';
import LeftSideBar from './LeftSideBar';

import '../styles/Main.css';

class Main extends React.Component {
	render() {
		return(
			<div className="main-container">
				<Navigation />
				<div className="info-container">
					<div className="lsb-container">
						<LeftSideBar />
					</div>
				</div>
			</div>
		);
	}
}

export default Main;