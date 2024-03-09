import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/atom/SearchBar";
import { getArchivedNotes } from "../utils/local-data";
import ButtonAdd from "../components/atom/ButtonAdd";
import RenderListItem from "../components/Molecul/RenderListItem";
export default function ListCatatan() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("");
  const [archiveNotes] = useState(getArchivedNotes());
  const onClickItem = (itemId) => {
    navigate(`/notes/${itemId}`);
  };
  const onClickAddItem = (itemId) => {
    navigate(`/notes/new`);
  };
  const onFilterChange = (e) => {
    setFilter(e.target.value);
  };
  const filteredData = archiveNotes.filter((item) =>
    item.title.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );
  return (
    <div className="app-container px-5 mx-3 position-relative">
      <SearchBar onFilterChange={onFilterChange} value={filter} />
      <RenderListItem data={filteredData} onClickItem={onClickItem} />
    </div>
  );
}
