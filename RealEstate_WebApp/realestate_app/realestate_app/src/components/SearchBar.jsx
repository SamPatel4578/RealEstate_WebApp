export default function SearchBar() {
    return (
        <div className="container">
            <div className="search-section">
                <form>
                    <div className="row g-3 align-items-end">
                        <div className="col-lg-3 col-md-6">
                            <label className="form-label">Location</label>
                            <input type="text" className="form-control" placeholder="City or ZIP code" />
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <label className="form-label">Property Type</label>
                            <select className="form-select">
                                <option value="">All Types</option>
                                <option>House</option>
                                <option>Apartment</option>
                                <option>Condo</option>
                            </select>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <label className="form-label">Price Range</label>
                            <select className="form-select">
                                <option value="">Any Price</option>
                                <option>Under $300k</option>
                                <option>$300k - $500k</option>
                                <option>$500k - $800k</option>
                            </select>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <button className="btn btn-search text-white w-100 py-2">Search</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
