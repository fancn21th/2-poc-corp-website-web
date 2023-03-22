import React from "react";
import styled from "styled-components";
import { getStrapiMedia } from "utils";

const HeroImage = styled.img`
  width: 100%;
  background: url(${(props) => props.src});
`;

const Hero = ({ url }) => {
  return (
    <>
      <HeroImage src={getStrapiMedia(url)} />
    </>
  );
};

export default Hero;
