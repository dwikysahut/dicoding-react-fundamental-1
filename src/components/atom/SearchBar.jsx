import React from "react";
import { Input } from "reactstrap";
import PropTypes from "prop-types";

export default function SearchBar({ value, onFilterChange }) {
  return (
    <div className="d-flex flex-column gap-1 mt-2">
      <p className="fs-3 m-0">Catatan Aktif</p>
      <Input
        id="search"
        name="search"
        placeholder="Ketikkan disini"
        type="text"
        value={value}
        onChange={onFilterChange}
      />
    </div>
  );
}
SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};
