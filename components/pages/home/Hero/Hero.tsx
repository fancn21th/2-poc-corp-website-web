import React from "react";
import styled from "styled-components";

const HeroImage = styled.img`
  width: 100%;
  background: url(${(props) => props.src});
`;

export function getStrapiMedia(url) {
  if (url == null) {
    return null;
  }
  if (url.startsWith("http") || url.startsWith("//")) {
    return url;
  }
  return `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337"}${url}`;
}

const Hero = ({ url }) => {
  return (
    <>
      <HeroImage src={getStrapiMedia(url)} />
    </>
  );
};

export default Hero;
