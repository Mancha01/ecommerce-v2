import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const [id, setID] = useState(null);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  let navigate = useNavigate();

  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setTitle(localStorage.getItem("Title"));
    setPrice(localStorage.getItem("Price"));
    setDescription(localStorage.getItem("Description"));
    setCategory(localStorage.getItem("Category"));
    setImage(localStorage.getItem("Image"));
  }, []);

  const updateAPIData = (e) => {
    e.preventDefault();
    axios
      .put(`https://63971e3d86d04c76338b596c.mockapi.io/products/${id}`, {
        title,
        price,
        description,
        category,
        image,
      })
      .then(() => {
        navigate("/read");
      });
  };
  return (
    <Containment>
      <Form>
        <fieldset>
          <legend>Update Product</legend>

          <Label>
            Title
            <Input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Label>
          <Label>
            Price
            <Input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Label>
          <Label>
            Description
            <TextArea
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Label>
          <Label>
            Category
            <Input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </Label>
          <Label>
            Image Url
            <Input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </Label>
        </fieldset>
        <button type="submit" onClick={updateAPIData}>
          Submit
        </button>
      </Form>
    </Containment>
  );
};

export default Update;

const Input = styled.input`
  display: block;
`;
const Label = styled.label`
  display: block;
  margin-top: 20px;
`;

const TextArea = styled.textarea`
  display: block;
`;

const Form = styled.form`
  margin-left: 20px;
  width: 80vw;
  height: 80vh;
`;

export const Containment = styled.div`
  background-image: linear-gradient(
    92.7deg,
    rgba(245, 212, 212, 1) 8.5%,
    rgba(252, 251, 224, 1) 90.2%
  );
  width: 100vw;
  height: 100vh;
`;
