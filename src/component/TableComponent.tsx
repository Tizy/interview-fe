import React, { useEffect, useState } from "react";
import { Item } from "../type/Item";
import "../App.css";

interface TableProps {
  items: Item[];
}

const Table: React.FC<TableProps> = ({ items }) => {
 
    return (
    <div className="data-table">
      <div className="data-table-header">
        <div>Id</div>
        <div>Name</div>
        <div>Email</div>
      </div>
      {items.map(item => (
        <div className="data-table-row" key={item.id}>
          <div>{item.id}</div>
          <div>{item.name}</div>
          <div>{item.email}</div>
        </div>
      ))}
    </div>
  );
};

export default Table;
