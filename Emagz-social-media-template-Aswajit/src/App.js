import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import Template7 from "./components/Templete 2/Templete2";
import WebPage from "./components/WebPage";
import Template1 from "./pages/Template1/Template1";
import Template10 from "./pages/Template10/Template10";
// import Template2 from "./pages/Template2/Template2";
// import Template3 from "./pages/Template3/Template3";
// import Template4 from "./pages/Template4/Template4";
// import Template5 from "./pages/Template5/Template5";
// import Template6 from "./pages/Template6/Template6";
// import Template8 from "./pages/Template8/Template8";
// import Template9 from "./pages/Template9/Template9";
import { useDispatch } from "react-redux";
import { saveTokenData, saveUserData } from "./redux/slice/authSlice";

const router = createBrowserRouter([
	{
		path: "/",
		element: <WebPage />,
	},
	
	{ path: "/Template1", element: <Template1 /> }, // :DONE
	// { path: "/Template2", element: <Template2 /> },
	// { path: "/Template3", element: <Template3 /> },
	// { path: "/Template4", element: <Template4 /> },
	// { path: "/Template5", element: <Template5 /> },
	// { path: "/Template6", element: <Template6 /> },
	// { path: "/Template7", element: <Template7 /> },
	// { path: "/Template8", element: <Template8 /> },
	// { path: "/Template9", element: <Template9 /> },
	{ path: "/Template10", element: <Template10 /> },
]);

const App = () => {
	document.documentElement.style.setProperty("--base-font-size", "100%");
	const dispatch = useDispatch()

	useEffect(() => {
		const userCookie = Cookies.get("E_user_obj");
		const tokenCookie = Cookies.get("E_token");
		
		if (tokenCookie === undefined) return;
		if (tokenCookie) dispatch(saveTokenData(tokenCookie));

		if (userCookie === undefined) return;
		if (userCookie) dispatch(saveUserData(userCookie));
	}, []);

	return <RouterProvider router={router} />;
};

export default App;
