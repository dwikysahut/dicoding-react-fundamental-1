import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  archiveNote,
  deleteNote,
  getAllNotes,
  getNote,
  unarchiveNote,
} from "../utils/local-data";
import { showFormattedDate } from "../utils";
import DetailButton from "../components/Molecul/DetailButton";

export default function DetailCatatan() {
  const [detailItem, setDetailItem] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  const onClickDeleteHandler = () => {
    deleteNote(id);
    navigate("/");
  };
  const onClickArchiveHandler = () => {
    if (detailItem.archived) {
      unarchiveNote(id);
      navigate("/");
    } else {
      archiveNote(id);
      navigate("/");
    }
  };
  useEffect(() => {
    setDetailItem(getNote(id));
  }, []);

  
  return (
    <div className="detail-page">
      <h2 className="detail-page__title">{detailItem?.title}</h2>
      <p className="detail-page__createdAt">
        {showFormattedDate(detailItem?.createdAt)}
      </p>
      <p className="detail-page__body mt-5">{detailItem?.body}</p>

      <DetailButton
        isArchived={detailItem?.archived ?? false}
        onClickDelete={onClickDeleteHandler}
        onClickArchive={onClickArchiveHandler}
      />
    </div>
  );
}
