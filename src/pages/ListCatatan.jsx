import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/atom/SearchBar";
import Card from "../components/atom/Card";
import { getActiveNotes } from "../utils/local-data";
import EachItem from "../components/Molecul/EachItem";
import { Button } from "reactstrap";
import ButtonAdd from "../components/atom/ButtonAdd";
import RenderListItem from "../components/Molecul/RenderListItem";
export default function ListCatatan() {
  const navigate = useNavigate();

  const [activeNotes, setActiveNotes] = useState(getActiveNotes());
  const [filter, setFilter] = useState("");
  const onClickItem = (itemId) => {
    navigate(`/notes/${itemId}`);
  };
  const onClickAddItem = (itemId) => {
    navigate(`/notes/new`);
  };
  const onFilterChange = (e) => {
    setFilter(e.target.value);
  };
  const filteredData = activeNotes.filter((item) =>
    item.title.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );
  return (
    <div className="app-container px-5 mx-3 position-relative">
      <SearchBar onFilterChange={onFilterChange} value={filter} />
      <RenderListItem data={filteredData} onClickItem={onClickItem} />

      <ButtonAdd onSubmit={onClickAddItem} />
    </div>
  );
}
