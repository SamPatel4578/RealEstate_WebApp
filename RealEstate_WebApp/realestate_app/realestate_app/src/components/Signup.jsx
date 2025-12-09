import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Signup() {

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        dob: "",
        email: "",
        role: "Customer",
        password: "",
        confirmPassword: ""
    });

    const [passwordChecks, setPasswordChecks] = useState({
        length: false,
        containsLetters: false,
        containsNumbers: false,
        containsSpecial: false
    });

    const validatePassword = (value) => {
        setPasswordChecks({
            length: value.length === 14,
            containsLetters: /[A-Za-z]/.test(value),
            containsNumbers: /\d/.test(value),
            containsSpecial: /[^A-Za-z0-9]/.test(value)
        });
    };

    const allValid =
        passwordChecks.length &&
        passwordChecks.containsLetters &&
        passwordChecks.containsNumbers &&
        passwordChecks.containsSpecial;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });

        if (name === "password") validatePassword(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // General validation
        if (
            !form.firstName ||
            !form.lastName ||
            !form.dob ||
            !form.email ||
            !form.password ||
            !form.confirmPassword
        ) {
            alert("All fields are required.");
            return;
        }

        if (!allValid) {
            alert("Password does not meet all requirements.");
            return;
        }

        if (form.password !== form.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        // Send request
        try {
            await axios.post("https://localhost:7282/api/users", {
                firstName: form.firstName,
                lastName: form.lastName,
                dob: form.dob,
                email: form.email,
                role: form.role,
                password: form.password
            });

            alert("Account created successfully!");
        } catch (err) {
            alert("Error creating account.");
        }
    };

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
                                    name="firstName"
                                    value={form.firstName}
                                    onChange={handleChange}
                                    required />
                            </div>

                            {/* Last Name */}
                            <div className="mb-3">
                                <label className="form-label">Last Name</label>
                                <input type="text" className="form-control"
                                    name="lastName"
                                    value={form.lastName}
                                    onChange={handleChange}
                                    required />
                            </div>

                            {/* DOB */}
                            <div className="mb-3">
                                <label className="form-label">Date of Birth</label>
                                <input type="date" className="form-control"
                                    name="dob"
                                    value={form.dob}
                                    onChange={handleChange}
                                    required />
                            </div>

                            {/* Email */}
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    required />
                            </div>

                            {/* Role */}
                            <div className="mb-3">
                                <label className="form-label">Role</label>
                                <select className="form-select"
                                    name="role"
                                    value={form.role}
                                    onChange={handleChange}
                                >
                                    <option value="Customer">Customer</option>
                                    <option value="Agent">Agent</option>
                                </select>
                            </div>

                            {/* Password */}
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control"
                                    name="password"
                                    value={form.password}
                                    onChange={handleChange}
                                    required />
                            </div>

                            {/* Password validation lines */}
                            <ul style={{ listStyle: "none", paddingLeft: 0, fontSize: "0.9rem" }}>
                                <li style={{ color: passwordChecks.length ? "green" : "red" }}>
                                    {passwordChecks.length ? "✔" : "✖"} Must be exactly 14 characters
                                </li>
                                <li style={{ color: passwordChecks.containsLetters ? "green" : "red" }}>
                                    {passwordChecks.containsLetters ? "✔" : "✖"} Must contain letters
                                </li>
                                <li style={{ color: passwordChecks.containsNumbers ? "green" : "red" }}>
                                    {passwordChecks.containsNumbers ? "✔" : "✖"} Must contain numbers
                                </li>
                                <li style={{ color: passwordChecks.containsSpecial ? "green" : "red" }}>
                                    {passwordChecks.containsSpecial ? "✔" : "✖"} Must contain special characters
                                </li>
                            </ul>

                            {/* Confirm Password */}
                            <div className="mb-3">
                                <label className="form-label">Confirm Password</label>
                                <input type="password" className="form-control"
                                    name="confirmPassword"
                                    value={form.confirmPassword}
                                    onChange={handleChange}
                                    required />
                            </div>

                            <button
                                className="btn btn-primary-custom"
                                type="submit"
                                disabled={!allValid}
                            >
                                Create Account
                            </button>
                        </form>

                        <div className="auth-footer">
                            Already have an account? <Link to="/login">Login</Link>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
