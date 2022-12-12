import React from "react";
import styled from "styled-components";
import { RiDeleteBin7Line } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import { Link } from "react-router-dom";

export const Card = ({
  title,
  price,
  description,
  category,
  img,
  btn,
  btn2,
}) => {
  return (
    <Card1>
      <Image src={img} alt="" />
      <Container1>
        <div>
          <Title>{title}</Title>
          <Desc>{description}</Desc>
          <Category>Category: {category}</Category>
        </div>
        <Container2>
          <Title>${price}</Title>
          <Container3>
            <div
              onClick={btn2}
              style={{ cursor: "pointer", marginRight: "10px" }}
            >
              <RiDeleteBin7Line />
            </div>
            <Link to="/update">
              <div onClick={btn}>
                <CiEdit color="black" />
              </div>
            </Link>
          </Container3>
        </Container2>
      </Container1>
    </Card1>
  );
};

const Container1 = styled.div`
  display: flex;
  padding: 10px;
`;

const Container2 = styled.div`
  margin-left: 40px;
`;
const Container3 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const Card1 = styled.div`
  width: 350px;
  height: 470px;
  background-color: #e9d985;
  border-radius: 15px;
  margin-top: 20px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 80%;
  height: 70%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  margin-bottom: 20px;
  margin-left: 10%;
  margin-top: 2%;
`;

const Desc = styled.p`
  font-size: small;
  margin: 0;
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Title = styled.h4`
  color: black;
  margin: 0;
`;

const Category = styled.h5`
  margin: 0;
  color: black;
`;
