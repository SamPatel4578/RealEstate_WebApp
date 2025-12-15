import { useState } from "react";
import "../../styles/Dashboard.css";

export default function ProfileSettings() {
    const user = JSON.parse(localStorage.getItem("user"));

    const [formData, setFormData] = useState({
        firstName: user?.firstName || "Amanda",
        lastName: user?.lastName || "Jones",
        email: user?.email || "dhruvil@example.com",
        phone: "",
        country: "",
        address: "",
        bio: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("UPDATED PROFILE:", formData);
        alert("Profile updated successfully");
    };

    return (
        <>
            <h2 className="dashboard-title">My Profile</h2>

            <div className="profile-card">
                {/* HEADER */}
                <div className="profile-header">
                    <div className="profile-avatar-wrapper">
                        <img
                            src="https://randomuser.me/api/portraits/women/44.jpg"
                            alt="Profile"
                            className="profile-avatar"
                        />
                        <span className="avatar-edit">✎</span>
                    </div>

                    <div>
                        <h4>{formData.firstName} {formData.lastName}</h4>
                        <span className="profile-role">
                            {user?.role === "Agent" ? "Property Owner" : "Customer"}
                        </span>
                    </div>
                </div>

                {/* FORM */}
                <form onSubmit={handleSubmit} className="profile-form">
                    <div className="profile-row">
                        <input
                            name="firstName"
                            placeholder="First Name"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                        <input
                            name="lastName"
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="profile-row">
                        <input
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <input
                            name="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="profile-row">
                        <select
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                        >
                            <option value="">Country</option>
                            <option>Australia</option>
                            <option>United States</option>
                            <option>United Kingdom</option>
                        </select>

                        <input
                            name="address"
                            placeholder="Address"
                            value={formData.address}
                            onChange={handleChange}
                        />
                    </div>

                    <textarea
                        name="bio"
                        placeholder="Short Bio"
                        value={formData.bio}
                        onChange={handleChange}
                    />

                    <button type="submit" className="profile-save-btn">
                        Update Profile
                    </button>
                </form>
            </div>
        </>
    );
}
