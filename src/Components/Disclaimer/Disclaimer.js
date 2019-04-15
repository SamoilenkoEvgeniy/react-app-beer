import React, {Component} from 'react';

class Disclaimer extends Component {
	render() {
		return (
			<div className="Disclaimer-container container-fluid">
				<div className="row">
					<div className="col">
						<div className="jumbotron">
							<h1 className="display-4">Hello, world!</h1>
							<p className="lead">
								This is a small home project reflecting my level of ReactJS skills.
							</p>
							<hr className="my-4" />
							<p>
								Here I made a simple data acquisition from the public API. Led the list and made getting 1 record from the public API.
							</p>
							<p>
								The total time spent on this small project: <strong>2 hours</strong>.
							</p>
							<p>
								Initial knowledge of React at the time of the creation of this project: <strong>I read something about it on the Internet</strong>.
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Disclaimer;
