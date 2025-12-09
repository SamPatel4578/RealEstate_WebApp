import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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
    // Password Validation State
    // -------------------------
    const [lengthOK, setLengthOK] = useState(false);
    const [containsLetter, setContainsLetter] = useState(false);
    const [containsNumber, setContainsNumber] = useState(false);
    const [containsSpecial, setContainsSpecial] = useState(false);

    // -------------------------
    // Form Change Handler
    // -------------------------
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    // -------------------------
    // Password Strength Check
    // -------------------------
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

        // Required field checks
        if (!form.firstName || !form.lastName || !form.dob || !form.email || !form.role || !form.password) {
            alert("All fields are required.");
            return;
        }

        if (!allValid) {
            alert("Password does not meet the requirement.");
            return;
        }

        if (form.password !== form.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        try {
            // Create User
            await axios.post("https://localhost:7282/api/users", {
                firstName: form.firstName,
                lastName: form.lastName,
                dob: form.dob,
                email: form.email,
                role: form.role,
                password: form.password
            });

            // Auto-login
            const loginResponse = await axios.post("https://localhost:7282/api/users/login", {
                email: form.email,
                password: form.password
            });

            // Save user
            localStorage.setItem("user", JSON.stringify(loginResponse.data));

            // Redirect
            window.location.href = "/dashboard";

        } catch (err) {
            alert("Error creating account.");
        }
    };

    // -------------------------------------------------
    //  PAGE RETURN — THIS WAS BREAKING IN YOUR FILE
    // -------------------------------------------------
    return (
        <>
            <section className="hero-auth">
                <h1>Create Your Account</h1>
            </section>

            <div className="container">
                <div className="auth-container">
                    <div className="card auth-card">

                        <div className="auth-emoji">🎉</div>
                        <h2 className="auth-title">Sign Up</h2>
                        <p className="auth-subtitle">Create your account to get started</p>

                        <form onSubmit={handleSubmit}>

                            {/* First Name */}
                            <div className="mb-3">
                                <label className="form-label">First Name</label>
                                <input type="text" className="form-control"
                                    name="firstName" value={form.firstName}
                                    onChange={handleChange} required />
                            </div>

                            {/* Last Name */}
                            <div className="mb-3">
                                <label className="form-label">Last Name</label>
                                <input type="text" className="form-control"
                                    name="lastName" value={form.lastName}
                                    onChange={handleChange} required />
                            </div>

                            {/* DOB */}
                            <div className="mb-3">
                                <label className="form-label">Date of Birth</label>
                                <input type="date" className="form-control"
                                    name="dob" value={form.dob}
                                    onChange={handleChange} required />
                            </div>

                            {/* Email */}
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control"
                                    name="email" value={form.email}
                                    onChange={handleChange} required />
                            </div>

                            {/* Role */}
                            <div className="mb-3">
                                <label className="form-label">Role</label>
                                <select className="form-select"
                                    name="role" value={form.role}
                                    onChange={handleChange} required>
                                    <option value="Customer">Customer</option>
                                    <option value="Agent">Agent</option>
                                </select>
                            </div>

                            {/* Password */}
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control"
                                    name="password" value={form.password}
                                    onChange={handleChange} required />
                            </div>

                            {/* Password Rules */}
                            <div style={{ fontSize: "0.9rem", marginBottom: "1rem" }}>
                                <p style={{ color: lengthOK ? "green" : "red" }}>
                                    {lengthOK ? "✔" : "✖"} Password must be EXACTLY 14 characters
                                </p>
                                <p style={{ color: containsLetter ? "green" : "red" }}>
                                    {containsLetter ? "✔" : "✖"} Must contain a letter
                                </p>
                                <p style={{ color: containsNumber ? "green" : "red" }}>
                                    {containsNumber ? "✔" : "✖"} Must contain a number
                                </p>
                                <p style={{ color: containsSpecial ? "green" : "red" }}>
                                    {containsSpecial ? "✔" : "✖"} Must contain a special character
                                </p>
                            </div>

                            {/* Confirm Password */}
                            <div className="mb-3">
                                <label className="form-label">Confirm Password</label>
                                <input type="password" className="form-control"
                                    name="confirmPassword" value={form.confirmPassword}
                                    onChange={handleChange} required />
                            </div>

                            <button className="btn btn-primary-custom" type="submit">
                                Create Account
                            </button>
                        </form>

                        <div className="auth-footer">
                            Already have an account?
                            <Link to="/login" className="auth-link ms-1">Login</Link>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
