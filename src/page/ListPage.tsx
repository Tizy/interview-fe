import React, { useEffect, useState } from "react";
import "../App.css";
import Table from "../component/TableComponent";
import { Item } from "../type/Item";

const ListPage: React.FC = () => {
    //const [items, setItems] = useState<Item[]>([]);
    const [items, setItems] = useState<Item[]>([
    { id: 1, name: "one", email: "first@email" },
    { id: 2, name: "two", email: "second@email" },
    { id: 3, name: "three", email:"anoter@email" }
    ]);
    return (
        <div>
        <h1>Iris Data</h1>
        <Table items={items} />
        </div>
    );
};

export default ListPage;
