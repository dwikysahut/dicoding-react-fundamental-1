import React from "react";
import { Button } from "reactstrap";
import PropTypes from "prop-types";

export default function ButtonAdd({ onSubmit }) {
  return (
    <Button
      className="btn-add position-fixed bottom-0 mb-3 end-0 me-3"
      onClick={onSubmit}
    >
      +
    </Button>
  );
}

ButtonAdd.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
