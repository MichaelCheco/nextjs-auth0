import { getToken } from '../static/auth';
import template from '../static/template';

const Index = ({ isLoggedIn }) => (
	<div>
		Hello, this is the main application.
		{!isLoggedIn && <p>You are not logged in yet</p>}
	</div>
);

export default template(Index);
