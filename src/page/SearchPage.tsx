import React, { useState } from "react";
import SearchFormComponent from "../component/SearchFormComponent";
import { Item } from "../type/Item";


const SearchPage: React.FC = () => {
  //const [item, setItems] = useState<Item | null>(null);
  const [item, setItems] = useState<Item>(
      { id: 1, name: "one", email: "first@email" }
  );
  const [error, setError] = useState<string | null>(null);

  function handleSearch(id: number): void {
    throw new Error("Function not implemented.");
  }

  const [formValues, setFormValues] = useState<{
        name?: string;
        email?: string;
  }>({});

  function handleUpdate() {
    throw new Error("Function not implemented.");
  }

  function handleRemove() {
      throw new Error("Function not implemented.");
  }

  return (
    <div>
      <h1>Search By ID</h1>
      <SearchFormComponent onSearch={handleSearch} />
      {error && <p style={{ color: "red" }}>{error}</p>}
      {item && (
        <>
        <div className="data-table">
          <div className="data-table-header">
            <div>ID</div>
            <div>name</div>
            <div>email</div>
          </div>
          <div className="data-table-row">
            <div>{item.id}</div>
            <div>{item.name}</div>
            <div>{item.email}</div>
          </div>
        </div>

        {/* ✅ Update Form */}
        <form
            onSubmit={e => {
              e.preventDefault();
              handleUpdate();
            }}
            className="filter-form"
        >
            <input
                type="text"
                step="any"
                placeholder="Name"
                value={formValues.name ?? ""}
                onChange={e => setFormValues({ ...formValues, name: e.target.value })}
            />
            <input
                type="text"
                step="any"
                value={formValues.email ?? ""}
               onChange={e => setFormValues({ ...formValues, email: e.target.value })}
                placeholder="email"
            />
            <button type="submit">Update Iris</button>
          </form>
          {/* ✅ Remove Button */}
          <button
            onClick={handleRemove}
            style={{ marginTop: "12px", backgroundColor: "red", color: "white", padding: "8px 12px" }}
          >
            Remove Item
          </button>
        </>
      )}
    </div>
  );
};

export default SearchPage;