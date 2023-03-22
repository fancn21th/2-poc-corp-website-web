import React from "react";
import styled from "styled-components";

const HeroImage = styled.img`
  width: 100%;
  height: 496px;
  background: url(${(props) => props.src});
  object-fit: cover;
`;

const Hero = ({ url, alt }) => {
  return (
    <>
      <HeroImage src={url} alt={alt} />
    </>
  );
};

export default Hero;
