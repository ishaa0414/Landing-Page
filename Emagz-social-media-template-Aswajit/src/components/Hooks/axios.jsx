import axios from "axios";
import Cookies from "js-cookie";

const Instance = axios.create({
	baseURL: `${process.env.REACT_APP_BASE_URL}/api`,
	headers: {
		authorization:
			Cookies.get("E_token")||
			"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDkxNjk4MTJkZTMzZmY2ZTRmYjdmMDAiLCJpYXQiOjE2OTE0ODQyMzF9.ofIqY9-E8pcwJGsqbyjoY1w5EIB5gQjtJ-qFa4Ynz2Q",
	},
});

export default Instance;
