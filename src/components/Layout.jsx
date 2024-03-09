import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./atom/Header";
import PropTypes from "prop-types";

export default function Layout({ children }) {
  const navigate = useNavigate();
  const goToArchiveHandler = () => {
    navigate("/archive");
  };
  const goToHomeHandler = () => {
    navigate("/");
  };
  return (
    <div className="d-flex flex-column">
      <Header onClickHome={goToHomeHandler} onClickArchive={goToArchiveHandler} />
      <main>{children}</main>
    </div>
  );
}
Layout.propTypes = {
  children: PropTypes.element,
};
