import React from 'react';
import Navigation from './Navigation';
import LeftSideBar from './LeftSideBar';
import RightSidebar from './RightSideBar';
import Info from './Info';

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
					<div className="center-container">
						<Info />
					</div>
					<div className="rsb-container">
						<RightSidebar />
					</div>
				</div>
			</div>
		);
	}
}

export default Main;