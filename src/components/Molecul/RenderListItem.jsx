import React from "react";
import EachItem from "./EachItem";
import Card from "../atom/Card";
import PropTypes from "prop-types";

export default function RenderListItem({ data, onClickItem }) {
  return data.length > 0 ? (
    <div className="notes-list">
      <EachItem
        items={data}
        render={(item, index) => (
          <Card data={item} key={index} onClick={onClickItem} />
        )}
      />
    </div>
  ) : (
    <div className="d-flex justify-content-center align-items-center mt-5">
      <p>Catatan Kosong</p>
    </div>
  );
}

RenderListItem.propTypes = {
  data: PropTypes.array.isRequired,
  onClickItem: PropTypes.func.isRequired,
};
