import React, { useState } from "react";

interface SearchFormProps {
  onSearch: (id: number) => void;
}

const SearchFormComponent: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [id, setId] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (id) {
      onSearch(Number(id));
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ marginBottom: "20px", display: "flex", gap: "12px" }}
    >
      <input
        type="number"
        placeholder="Enter ID"
        value={id}
        onChange={e => setId(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchFormComponent;