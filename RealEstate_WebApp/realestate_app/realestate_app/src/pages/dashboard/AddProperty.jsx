import { useState } from "react";
import "../../styles/AddProperty.css";

export default function AddProperty() {
    const user = JSON.parse(localStorage.getItem("user"));

    const initialState = {
        title: "",
        status: "",
        type: "",
        price: "",
        area: "",
        rooms: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        summary: "",
        builtIn: "",
        bedrooms: "",
        bathrooms: "",
        features: [],
        name: "",
        email: "",
        phone: ""
    };

    const [formData, setFormData] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [images, setImages] = useState([]);

    /* =========================
       INPUT HANDLER
    ========================= */
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === "checkbox") {
            setFormData(prev => ({
                ...prev,
                features: checked
                    ? [...prev.features, value]
                    : prev.features.filter(f => f !== value)
            }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }

        setErrors(prev => ({ ...prev, [name]: "" }));
    };

    /* =========================
       IMAGE UPLOAD
    ========================= */
    const handleFiles = (files) => {
        const validImages = Array.from(files).filter(file =>
            file.type.startsWith("image/")
        );
        setImages(prev => [...prev, ...validImages]);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        handleFiles(e.dataTransfer.files);
    };

    const handleDragOver = (e) => e.preventDefault();

    const handleFileInput = (e) => handleFiles(e.target.files);

    /* =========================
       VALIDATION
    ========================= */
    const validate = () => {
        const newErrors = {};

        if (!formData.title.trim()) newErrors.title = "Property title is required";
        if (!formData.status.trim()) newErrors.status = "Status is required";
        if (!formData.type.trim()) newErrors.type = "Type is required";
        if (!formData.price.trim()) newErrors.price = "Price is required";
        if (!formData.address.trim()) newErrors.address = "Address is required";
        if (!formData.city.trim()) newErrors.city = "City is required";
        if (!formData.state.trim()) newErrors.state = "State is required";
        if (!formData.summary.trim()) newErrors.summary = "Summary is required";
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) newErrors.email = "Email is required";

        return newErrors;
    };

    /* =========================
       SUBMIT
    ========================= */
    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validate();
        if (Object.keys(validationErrors).length) {
            setErrors(validationErrors);
            return;
        }

        console.log("SUBMITTED DATA:", { ...formData, images });
        alert("Property submitted successfully!");

        setFormData(initialState);
        setImages([]);
        setErrors({});
    };

    return (
        <>
            <h2 className="dashboard-title">Add Property</h2>

            <form className="add-property-card" onSubmit={handleSubmit}>

                {/* ALERT */}
                <div className="add-property-alert">
                    <strong>Don't Have an Account?</strong>
                    <p>
                        If you don't have an account you can create one by entering
                        your email address in contact details section.
                    </p>
                </div>

                {/* BASIC INFO */}
                <h5 className="form-section-title">Basic Information</h5>

                <input
                    name="title"
                    placeholder="Property Title"
                    value={formData.title}
                    onChange={handleChange}
                    className={errors.title ? "input-error" : ""}
                />
                {errors.title && <span className="error-text">{errors.title}</span>}

                <div className="form-row">
                    <input
                        name="status"
                        placeholder="Status"
                        value={formData.status}
                        onChange={handleChange}
                        className={errors.status ? "input-error" : ""}
                    />
                    <input
                        name="type"
                        placeholder="Type"
                        value={formData.type}
                        onChange={handleChange}
                        className={errors.type ? "input-error" : ""}
                    />
                </div>

                <div className="form-row">
                    <input
                        name="price"
                        placeholder="Price"
                        value={formData.price}
                        onChange={handleChange}
                        className={errors.price ? "input-error" : ""}
                    />
                    <input name="area" placeholder="Area" value={formData.area} onChange={handleChange} />
                    <select name="rooms" value={formData.rooms} onChange={handleChange}>
                        <option value="">Rooms</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4+</option>
                    </select>
                </div>

                {/* GALLERY */}
                <h5 className="form-section-title">Gallery</h5>

                <div
                    className="upload-box"
                    onClick={() => document.getElementById("imageUpload").click()}
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                >
                    <input
                        id="imageUpload"
                        type="file"
                        multiple
                        accept="image/*"
                        hidden
                        onChange={handleFileInput}
                    />
                    Click here or drop files to upload
                </div>

                {images.length > 0 && (
                    <div className="image-preview-grid">
                        {images.map((img, idx) => (
                            <img key={idx} src={URL.createObjectURL(img)} alt="preview" />
                        ))}
                    </div>
                )}

                {/* LOCATION */}
                <h5 className="form-section-title">Location</h5>

                <div className="form-row">
                    <input
                        name="address"
                        placeholder="Address"
                        value={formData.address}
                        onChange={handleChange}
                        className={errors.address ? "input-error" : ""}
                    />
                    <input
                        name="city"
                        placeholder="City"
                        value={formData.city}
                        onChange={handleChange}
                        className={errors.city ? "input-error" : ""}
                    />
                </div>

                <div className="form-row">
                    <input
                        name="state"
                        placeholder="State"
                        value={formData.state}
                        onChange={handleChange}
                        className={errors.state ? "input-error" : ""}
                    />
                    <input name="zip" placeholder="Zip Code" value={formData.zip} onChange={handleChange} />
                </div>

                {/* DETAILS */}
                <h5 className="form-section-title">Detailed Information</h5>

                <textarea
                    name="summary"
                    placeholder="Summary"
                    value={formData.summary}
                    onChange={handleChange}
                    className={errors.summary ? "input-error" : ""}
                />
                {errors.summary && <span className="error-text">{errors.summary}</span>}

                <div className="form-row">
                    <input name="builtIn" placeholder="Built In" value={formData.builtIn} onChange={handleChange} />
                    <input name="bedrooms" placeholder="Bedrooms" value={formData.bedrooms} onChange={handleChange} />
                    <input name="bathrooms" placeholder="Bathrooms" value={formData.bathrooms} onChange={handleChange} />
                </div>

                {/* FEATURES */}
                <h5 className="form-section-title">Other Features (optional)</h5>
                <div className="features-grid">
                    {[
                        "Air Conditioning",
                        "Swimming Pool",
                        "Central Heating",
                        "Laundry Room",
                        "Gym",
                        "Alarm",
                        "Window Covering"
                    ].map(feature => (
                        <label key={feature} className="feature-item">
                            <input
                                type="checkbox"
                                value={feature}
                                checked={formData.features.includes(feature)}
                                onChange={handleChange}
                            />
                            {feature}
                        </label>
                    ))}
                </div>

                {/* CONTACT */}
                <h5 className="form-section-title">Contact Details</h5>

                <div className="form-row">
                    <input
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        className={errors.name ? "input-error" : ""}
                    />
                    <input
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className={errors.email ? "input-error" : ""}
                    />
                    <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
                </div>

                <button type="submit" className="submit-btn">
                    Submit Property
                </button>
            </form>
        </>
    );
}
