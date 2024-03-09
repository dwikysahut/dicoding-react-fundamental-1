import React, { useState } from "react";
import Input from "../components/atom/Input";
import { addNote } from "../utils/local-data";
import { useNavigate } from "react-router-dom";
import InputRichText from "../components/atom/InputRichText";
import { Button } from "reactstrap";
export default function TambahCatatan() {
  const [formState, setFormState] = useState({
    id: "",
    title: "",
    body: "",
    archived: false,
    createdAt: "",
  });
  const navigate = useNavigate();

  const onChangeFormHandler = (e) => {
    setFormState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onChangeFormRichTextHandler = (e) => {
    setFormState((prevState) => ({
      ...prevState,
      body: e.target.innerHTML,
    }));
  };

  const onSubmitFormHandler = () => {
    const _id = +new Date();
    addNote({
      ...formState,
      id: _id,
      createdAt: +new Date(),
    });
    navigate("/");
  };
  return (
    <form className="d-flex flex-column gap-3 px-5">
      <Input
        form={formState}
        title={"Judul"}
        name={"title"}
        onChangeForm={onChangeFormHandler}
        placeholder={"Masukkan Judul"}
      />
      <InputRichText
        form={formState}
        name="body"
        placeholder={"Tulis Catatan Disini"}
        onChangeForm={onChangeFormRichTextHandler}
      />
      <Button className="w-25 align-self-end" onClick={onSubmitFormHandler}>Simpan</Button>
    </form>
  );
}
