import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Card } from "./Card";
import axios from "axios";

const Read = () => {
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://63971e3d86d04c76338b596c.mockapi.io/products`)
      .then((response) => {
        setCartData(response.data);
      });
  }, []);

  const setData = (data) => {
    let { id, title, price, description, category, image } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("Title", title);
    localStorage.setItem("Price", price);
    localStorage.setItem("Description", description);
    localStorage.setItem("Category", category);
    localStorage.setItem("Image", image);
  };

  const onDelete = (id) => {
    axios
      .delete(`https://63971e3d86d04c76338b596c.mockapi.io/products/${id}`)
      .then(() => {
        getData();
      });
  };

  const getData = () => {
    axios
      .get(`https://63971e3d86d04c76338b596c.mockapi.io/products`)
      .then((res) => {
        setCartData(res.data);
      });
  };
  return (
    <Container>
      {cartData.map((data) => (
        <Card
          key={data.id}
          title={data.title}
          price={data.price}
          description={data.description}
          category={data.category}
          img={data.image}
          btn={() => setData(data)}
          btn2={() => onDelete(data.id)}
        />
      ))}
    </Container>
  );
};

export default Read;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: whitesmoke;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
