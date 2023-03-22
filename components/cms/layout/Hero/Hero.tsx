import React from "react";
import styled from "styled-components";
import { getStrapiMedia } from "utils";

const HeroImage = styled.img`
  width: 100%;
  background: url(${(props) => props.src});
`;

const Hero = ({ url, alt }) => {
  return (
    <>
      <h2>Hero</h2>
      <HeroImage src={getStrapiMedia(url)} alt={alt} />
    </>
  );
};

export default Hero;
