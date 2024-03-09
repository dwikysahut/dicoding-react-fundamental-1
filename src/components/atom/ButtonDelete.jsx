import React from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import { BiSolidTrashAlt } from "react-icons/bi";

export default function ButtonDelete({ onClick }) {
  return (
    <Button className="rounded-circle" style={{width:'44px',height:'44px'}} type="reset" onClick={onClick}>
      <BiSolidTrashAlt size={18} />
    </Button>
  );
}

ButtonDelete.propTypes = {
  onClick: PropTypes.func.isRequired,
};
