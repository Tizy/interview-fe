import React, { useState } from "react";
import { Item } from "../type/Item";

const NewPage: React.FC = () => {
    const [message, setMessage] = useState<string | null>(null);     
    const [error, setError] = useState<string | null>(null);

    const [formValues, setFormValues] = useState<Omit<Item, "id">>({
        name: "",
        email: ""
    });
    const [createdItem, setCreatedItem] = useState<Item | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); 
        throw new Error("Function not implemented.");
    }

    const handleChange = (field: keyof Omit<Item, "id">, value: string) => {
        throw new Error("Function not implemented.");
    }

    return (
    <div>
      <h1>Add New Item</h1>
      <form onSubmit={handleSubmit} className="filter-form">
        <label>
          Name:
          <input
            type="text"
            step="any"
            value={formValues.name}
            onChange={e => setFormValues({ ...formValues, name: e.target.value })}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            step="any"
            value={formValues.email}
             onChange={e => setFormValues({ ...formValues, email: e.target.value })}
          />
        </label>
        <button type="submit">Create New Item</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {createdItem && (
        <div className="data-table">
          <div className="data-table-header">
            <div>ID</div>
            <div>Name</div>
            <div>Email</div>
          </div>
          <div className="data-table-row">
            <div>{createdItem.id}</div>
            <div>{createdItem.name}</div>
            <div>{createdItem.email}</div>
          </div>
        </div>
      )}
    </div>
  );

};

export default NewPage;