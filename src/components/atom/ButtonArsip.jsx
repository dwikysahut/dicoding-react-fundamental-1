import React from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import { BiSolidArchiveIn , BiSolidArchiveOut } from "react-icons/bi";

export default function ButtonArchive({ isArchived, onClick }) {
  return (
    <Button className="rounded-circle" style={{width:'44px',height:'44px'}} type="reset" onClick={onClick}>
      {isArchived ? <BiSolidArchiveOut size={18} /> : <BiSolidArchiveIn  size={18} />}
    </Button>
  );
}

ButtonArchive.propTypes = {
  isArchived: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};
