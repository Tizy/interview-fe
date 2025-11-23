import React from "react";

interface FilterFormProps {
  nameFilter: string;
  emailFilter: string;
  setNameFilter: (val: string) => void;
  setEmailFilter: (val: string) => void;
  onApply: () => void;
  onClear: () => void;
}

const FilterFormComponent: React.FC<FilterFormProps> = ({
  nameFilter,
  emailFilter,
  setNameFilter,
  setEmailFilter,
  onApply,
  onClear
}) => {
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onApply();
      }}
      className="filter-form"
    >
      <input
        type="text"
        placeholder="Name"
        value={nameFilter}
        onChange={e => setNameFilter(e.target.value)}
      />
      <input
        type="text"
        placeholder="Email"
        value={emailFilter}
        onChange={e => setEmailFilter(e.target.value)}
      />
      <div>
        <button type="submit">Apply</button>
        <button type="button" onClick={onClear} style={{ marginLeft: "8px" }}>
          Clear
        </button>
      </div>
    </form>
  );
};

export default FilterFormComponent;