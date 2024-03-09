import React from "react";
import PropTypes from "prop-types";

export default function Header({ onClickArchive,onClickHome }) {
  return (
    <header className="d-flex justi w-100 justify-content-between align-items-center bg-black text-white">
      <h1 style={{cursor:'pointer'}} onClick={onClickHome}>Aplikasi Catatan</h1>
      <p style={{ cursor: "pointer" }} onClick={onClickArchive}>
        Arsip
      </p>
    </header>
  );
}
Header.propTypes = {
  onClickArchive: PropTypes.func.isRequired,
  onClickHome: PropTypes.func.isRequired,
};
