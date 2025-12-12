import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/Login.css";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post("https://localhost:7282/api/users/login", {
                email: email,
                password: password
            });

            alert("Login Successful!");
            localStorage.setItem("user", JSON.stringify(res.data));
            window.location.href = "/";
        }
        catch (err) {
            if (err.response) alert(err.response.data);
            else alert("Network error");
        }
    };

    return (
        <div className="auth-page">
            {/* LOGIN PAGE NAVBAR */}
            <header className="auth-navbar">
                <div className="auth-nav-container">
                    <Link to="/" className="auth-logo">DreamHome Realty</Link>

                    <div className="auth-nav-right">
                        <Link to="/login" className="auth-nav-btn">Login</Link>
                        <Link to="/signup" className="auth-nav-btn">Sign Up</Link>
                    </div>
                </div>
            </header>

            <div className="login-wrapper">

                {/* LEFT SIDE (Form) */}
                <div className="login-left">
                    <div className="login-box">

                        <h2 className="login-title">Login with your account</h2>

                        <form onSubmit={handleSubmit}>

                            <label className="login-label">Email Address</label>
                            <input
                                type="email"
                                className="login-input"
                                placeholder="you@example.com"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <label className="login-label">Password</label>
                            <input
                                type="password"
                                className="login-input"
                                placeholder="Enter your password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            <button className="login-btn" type="submit">
                                Login
                            </button>
                        </form>

                        <p className="login-register">
                            Don't have an account? <Link to="/signup">Create Account</Link>
                        </p>

                    </div>
                </div>

                {/* RIGHT SIDE IMAGE */}
                <div className="login-right">
                    <img
                        src="https://html.laralink.com/xproperty/assets/img/hero-bg-7.jpg"
                        alt="Luxury home"
                    />
                </div>

            </div>
        </div>
    );
}
