import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/Signup.css";

export default function Signup() {

    // -------------------------
    // Form State
    // -------------------------
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        dob: "",
        email: "",
        role: "Customer",
        password: "",
        confirmPassword: ""
    });

    // -------------------------
    // Password Validation
    // -------------------------
    const [lengthOK, setLengthOK] = useState(false);
    const [containsLetter, setContainsLetter] = useState(false);
    const [containsNumber, setContainsNumber] = useState(false);
    const [containsSpecial, setContainsSpecial] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    useEffect(() => {
        const pwd = form.password;

        setLengthOK(pwd.length === 14);
        setContainsLetter(/[A-Za-z]/.test(pwd));
        setContainsNumber(/[0-9]/.test(pwd));
        setContainsSpecial(/[!@#$%^&*(),.?":{}|<>]/.test(pwd));

    }, [form.password]);

    const allValid = lengthOK && containsLetter && containsNumber && containsSpecial;

    // -------------------------
    // Submit Handler
    // -------------------------
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!allValid) {
            alert("Password does not meet all requirements.");
            return;
        }

        if (form.password !== form.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        try {
            await axios.post("https://localhost:7282/api/users", {
                firstName: form.firstName,
                lastName: form.lastName,
                dob: form.dob,
                email: form.email,
                role: form.role,
                password: form.password
            });

            const loginResponse = await axios.post("https://localhost:7282/api/users/login", {
                email: form.email,
                password: form.password
            });

            localStorage.setItem("user", JSON.stringify(loginResponse.data));
            window.location.href = "/dashboard";

        } catch (err) {
            alert("Error creating account.");
        }
    };

    // -------------------------------------------------
    //  PAGE RETURN WITH AUTH NAVBAR + MODERN UI
    // -------------------------------------------------
    return (
        <div className="auth-page">
            {/* AUTH NAVBAR */}
            <header className="auth-navbar">
                <div className="auth-nav-container">
                    <Link to="/" className="auth-logo">DreamHome Realty</Link>

                    <div className="auth-nav-right">
                        <Link to="/login" className="auth-nav-btn">Login</Link>
                        <Link to="/signup" className="auth-nav-btn">Sign Up</Link>
                    </div>
                </div>
            </header>

            {/* MAIN SIGNUP LAYOUT */}
            <div className="auth-wrapper">

                {/* LEFT SIDE FORM */}
                <div className="auth-left">
                    <div className="auth-card signup-card">

                        <h2 className="auth-title mb-4">Create your account</h2>

                        <form onSubmit={handleSubmit}>

                            {/* First Name */}
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                className="input-auth"
                                required
                                value={form.firstName}
                                onChange={handleChange}
                            />

                            {/* Last Name */}
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                className="input-auth"
                                required
                                value={form.lastName}
                                onChange={handleChange}
                            />

                            {/* DOB */}
                            <input
                                type="date"
                                name="dob"
                                className="input-auth"
                                required
                                value={form.dob}
                                onChange={handleChange}
                            />

                            {/* Email */}
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                className="input-auth"
                                required
                                value={form.email}
                                onChange={handleChange}
                            />

                            {/* Role */}
                            <select
                                name="role"
                                className="input-auth"
                                required
                                value={form.role}
                                onChange={handleChange}
                            >
                                <option value="Customer">Customer</option>
                                <option value="Agent">Agent</option>
                            </select>

                            {/* Password */}
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="input-auth"
                                required
                                value={form.password}
                                onChange={handleChange}
                            />

                            {/* Validation Rules */}
                            <div className="password-rules">
                                <p className={lengthOK ? "ok" : "bad"}>
                                    {lengthOK ? "✔" : "✖"} Must be EXACTLY 14 characters
                                </p>
                                <p className={containsLetter ? "ok" : "bad"}>
                                    {containsLetter ? "✔" : "✖"} Must contain a letter
                                </p>
                                <p className={containsNumber ? "ok" : "bad"}>
                                    {containsNumber ? "✔" : "✖"} Must contain a number
                                </p>
                                <p className={containsSpecial ? "ok" : "bad"}>
                                    {containsSpecial ? "✔" : "✖"} Must contain a special symbol
                                </p>
                            </div>

                            {/* Confirm Password */}
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                className="input-auth"
                                required
                                value={form.confirmPassword}
                                onChange={handleChange}
                            />

                            <button type="submit" className="btn-auth">
                                Submit Request
                            </button>

                        </form>

                        {/* Social Login */}
                        <p className="or-line">Or signup with</p>

                        <div className="social-row">
                            <i className="fab fa-facebook"></i>
                            <i className="fab fa-linkedin"></i>
                            <i className="fab fa-google"></i>
                        </div>

                        {/* Redirect to Login */}
                        <p className="auth-footer">
                            Already have an account?
                            <Link to="/login" className="auth-link"> Login Now</Link>
                        </p>

                    </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="auth-right"></div>

            </div>
        </div>   // <--- CLOSE WRAPPER
    );

}
