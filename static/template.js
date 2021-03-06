import React from 'react';
import Header from '../components/Header';
import { getTokenForBrowser, getTokenForServer } from '../static/auth';

export default Page =>
	class Template extends React.Component {
		static async getInitialProps({ req }) {
			const loggedinUser = process.browser
				? await getTokenForBrowser()
				: await getTokenForServer(req);
			const pageProperties =
				(await Page.getInitialProps) && (await Page.getInitialProps(req));
			return {
				...pageProperties,
				loggedinUser,
				isLoggedIn: !!loggedinUser,
			};
		}
		render() {
			return (
				<div>
					<Header {...this.props} />
					<Page {...this.props} />
				</div>
			);
		}
	};
