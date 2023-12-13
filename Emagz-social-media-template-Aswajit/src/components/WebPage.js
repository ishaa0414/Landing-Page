import { NavLink } from "react-router-dom";

const WebPage = () => {
	document.documentElement.style.setProperty("--base-font-size", "100%");
	return (
		<>
			<NavLink to="/Template1">
				<h1>Template 1</h1>
			</NavLink>
			<NavLink to="/Template2">
				<h1>Template 2</h1>
			</NavLink>
			<NavLink to="/Template3">
				<h1>Template 3</h1>
			</NavLink>
			<NavLink to="/Template4">
				<h1>Template 4</h1>
			</NavLink>
			<NavLink to="/Template5">
				<h1>Template 5</h1>
			</NavLink>
			<NavLink to="/Template6">
				<h1>Template 6</h1>
			</NavLink>
			<NavLink to="/Template7">
				<h1>Template 7</h1>
			</NavLink>
			<NavLink to="/Template8">
				<h1>Template 8</h1>
			</NavLink>
			<NavLink to="/Template9">
				<h1>Template 9</h1>
			</NavLink>
			<NavLink to="/Template10">
				<h1>Template 10</h1>
			</NavLink>
		</>
	);
};
export default WebPage;
