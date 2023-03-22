import React from "react";
import styled from "styled-components";
import Tabs from "./Tabs";
import Models from "./Models";

const ProductsWrapper = styled.div`
  display: flex;
  margin-top: 72px;
`;

const Products = ({ models }) => {
  return (
    <ProductsWrapper>
      <Tabs />
      <Models models={models} />
    </ProductsWrapper>
  );
};

export default Products;
