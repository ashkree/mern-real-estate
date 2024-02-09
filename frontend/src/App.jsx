import { BrowserRouter, Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SigUp";

export default function App() {
	return;
	<BrowserRouter>
		<Route
			path="/"
			element={<Home />}
		/>
		<Route
			path="/about"
			element={<About />}
		/>
		<Route
			path="/profile"
			element={<Profile />}
		/>
		<Route
			path="/signin"
			element={<SignIn />}
		/>
		<Route
			path="/signout"
			element={<SignUp />}
		/>
	</BrowserRouter>;
}
