import React from "react";
import styled from "styled-components";

const HeroWrapper = styled.div`
  display: flex;
  position: relative;
`;

const HeroImage = styled.img`
  width: 100%;
  height: 496px;
  object-fit: cover;
`;

const HeroButton = styled.a`
  border: 1px solid #fff;
  background: #fff;
  color: #000;
  position: absolute;
  left: 100px;
  bottom: 150px;
  padding: 12px 40px;
`;

const Hero = ({ url, alt, bannerTitle, bannerLink }) => {
  return (
    <HeroWrapper>
      <HeroImage src={url} alt={alt} />
      <HeroButton href={bannerLink} target="_blank">
        {bannerTitle}
      </HeroButton>
    </HeroWrapper>
  );
};

export default Hero;
