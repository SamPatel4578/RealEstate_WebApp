import "../../styles/Listings.css";

export default function FiltersSidebar() {
    return (
        <aside className="filters-card">

            <FilterBlock title="Property Type">
                {["Apartment", "House", "Office Space", "Villa", "Commercial"].map(t => (
                    <FilterCheckbox key={t} label={t} />
                ))}
            </FilterBlock>

            <FilterBlock title="Offer Type">
                {["All", "Buy", "Rent"].map(t => (
                    <FilterCheckbox key={t} label={t} />
                ))}
            </FilterBlock>

            <FilterBlock title="Location">
                <input
                    type="text"
                    className="filter-input"
                    placeholder="Search location..."
                />
            </FilterBlock>

            <FilterBlock title="Bedroom">
                {["1", "2", "3", "4", "More than 4"].map(t => (
                    <FilterCheckbox key={t} label={t} />
                ))}
            </FilterBlock>

            <FilterBlock title="Bathroom">
                {["1", "2", "3", "4", "More than 4"].map(t => (
                    <FilterCheckbox key={t} label={t} />
                ))}
            </FilterBlock>

            <FilterBlock title="Price">
                <div className="range-row">
                    <input placeholder="Min" />
                    <br />
                    <input placeholder="Max" />
                </div>
            </FilterBlock>

            <FilterBlock title="Square Feet">
                <div className="range-row">
                    <input placeholder="Min" />
                    <br />
                    <input placeholder="Max" />
                </div>
            </FilterBlock>

        </aside>
    );
}

/* ========= SUB COMPONENTS ========= */

function FilterBlock({ title, children }) {
    return (
        <div className="filter-block">
            <h4 className="filter-title">{title}</h4>
            {children}
        </div>
    );
}

function FilterCheckbox({ label }) {
    return (
        <label className="filter-option">
            <input type="checkbox" />
            <span>{label}</span>
        </label>
    );
}
