export default function SearchBar() {
    return (
        <div className="search-box-v6">

            <div className="search-tabs">
                <button className="active">For Sale</button>
                <button>For Rent</button>
            </div>

            <div className="search-fields">

                <div className="field">
                    <label>Property Type</label>
                    <select>
                        <option>Apartment</option>
                        <option>House</option>
                        <option>Townhouse</option>
                    </select>
                </div>

                <div className="field">
                    <label>Location</label>
                    <input type="text" placeholder="Search location..." />
                </div>

                <div className="field">
                    <label>Bedrooms</label>
                    <select>
                        <option>Any</option>
                        <option>1+</option>
                        <option>2+</option>
                        <option>3+</option>
                    </select>
                </div>

                <button className="btn-search-v6">Search</button>
            </div>

        </div>
    );
}
