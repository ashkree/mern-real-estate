import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
	const [formData, setFormData] = useState({});
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();
	const handleFormChange = (e) => {
		setFormData({
			...formData,
			[e.target.id]: e.target.value,
		});
	};
	const handleFormSubmission = async (e) => {
		e.preventDefault();
		try {
			setIsLoading(true);
			const res = await fetch("/api/auth/signup", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});
			const data = await res.json();
			console.log(data);
			if (data.success === false) {
				setIsLoading(false);
				setError(data.message);
				return;
			}
			setIsLoading(false);
			setError(null);
			navigate("/signin");
		} catch (error) {
			setIsLoading(false);
			setError(error.message);
		}
	};
	return (
		<div className="p-3 max-w-lg mx-auto">
			<h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
			<form
				onSubmit={handleFormSubmission}
				className="flex flex-col gap-4"
			>
				<input
					type="text"
					placeholder="username"
					className="border p-3 rounded-lg"
					id="username"
					onChange={handleFormChange}
				/>
				<input
					type="email"
					placeholder="email"
					className="border p-3 rounded-lg"
					id="email"
					onChange={handleFormChange}
				/>
				<input
					type="password"
					placeholder="password"
					className="border p-3 rounded-lg"
					id="password"
					onChange={handleFormChange}
				/>

				<button
					disabled={isLoading}
					className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
				>
					{isLoading ? "Loading..." : "Sign Up"}
				</button>
			</form>
			<div className="flex gap-2 mt-5">
				<p>Have an account?</p>
				<Link to={"/sign-in"}>
					<span className="text-blue-700">Sign in</span>
				</Link>
			</div>
			{error && <p className="text-red-500 mt-5">{error}</p>}
		</div>
	);
}
