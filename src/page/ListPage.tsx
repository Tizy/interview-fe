import React, { useEffect, useState } from "react";
import "../App.css";
import Table from "../component/TableComponent";
import { Item } from "../type/Item";
import FilterFormComponent from "../component/FilterFormComponent";

const ListPage: React.FC = () => {
    //const [items, setItems] = useState<Item[]>([]);
    const [items, setItems] = useState<Item[]>([
    { id: 1, name: "one", email: "first@email" },
    { id: 2, name: "two", email: "second@email" },
    { id: 3, name: "three", email:"anoter@email" }
    ]);
    const [nameFilter, setEmailFilter] = useState("");
    const [emailFilter, setNameFilter] = useState("");
    
    function applyFilters(): void {
        throw new Error("Function not implemented.");
    }

    function clearFilters(): void {
        throw new Error("Function not implemented.");
    }

    return (
        <div>
        <h1>Item Data</h1>
       <FilterFormComponent
        nameFilter={nameFilter}
        emailFilter={emailFilter}
        setEmailFilter={setEmailFilter}
        setNameFilter={setNameFilter}
        onApply={applyFilters}
        onClear={clearFilters}   
        />
        <Table items={items} />
        </div>
    );
};

export default ListPage;
