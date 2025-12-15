import { useState } from "react";
import "../../styles/Dashboard.css";

export default function ChangePassword() {
    const [formData, setFormData] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: ""
    });

    const [errors, setErrors] = useState({});

    /* =========================
       HANDLERS
    ========================= */
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        setErrors(prev => ({
            ...prev,
            [name]: ""
        }));
    };

    /* =========================
       VALIDATION
    ========================= */
    const validate = () => {
        const newErrors = {};

        if (!formData.currentPassword) {
            newErrors.currentPassword = "Current password is required";
        }

        if (!formData.newPassword) {
            newErrors.newPassword = "New password is required";
        } else if (formData.newPassword.length < 14) {
            newErrors.newPassword = "Password must be at least 14 characters long";
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = "Please confirm your password";
        } else if (formData.newPassword !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }

        return newErrors;
    };

    /* =========================
       SUBMIT
    ========================= */
    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        console.log("PASSWORD UPDATED:", formData);
        alert("Password updated successfully!");

        setFormData({
            currentPassword: "",
            newPassword: "",
            confirmPassword: ""
        });
    };

    return (
        <>
            <h2 className="dashboard-title">Change Password</h2>

            <div className="change-password-layout">
                {/* FORM CARD */}
                <div className="change-password-card">
                    <form onSubmit={handleSubmit}>
                        <input
                            type="password"
                            name="currentPassword"
                            placeholder="Current Password"
                            value={formData.currentPassword}
                            onChange={handleChange}
                            className={errors.currentPassword ? "input-error" : ""}
                        />
                        {errors.currentPassword && (
                            <span className="error-text">{errors.currentPassword}</span>
                        )}

                        <input
                            type="password"
                            name="newPassword"
                            placeholder="New Password"
                            value={formData.newPassword}
                            onChange={handleChange}
                            className={errors.newPassword ? "input-error" : ""}
                        />
                        {errors.newPassword && (
                            <span className="error-text">{errors.newPassword}</span>
                        )}

                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm New Password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className={errors.confirmPassword ? "input-error" : ""}
                        />
                        {errors.confirmPassword && (
                            <span className="error-text">{errors.confirmPassword}</span>
                        )}

                        <button type="submit" className="profile-save-btn">
                            Update Password
                        </button>
                    </form>
                </div>

                {/* INFO PANEL */}
                <div className="password-info-card">
                    <p>
                        Your password should be at least <strong>14 random characters</strong> long
                        to be safe.
                    </p>
                </div>
            </div>
        </>
    );
}
