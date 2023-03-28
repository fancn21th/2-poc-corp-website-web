import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";

const HeroWrapper = styled.div`
  display: flex;
  height: 100vh;
  position: relative;
  padding-top: 60px;
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
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
  const btn = useRef(null);

  useEffect(() => {
    gsap.from(btn.current, {
      duration: 2,
      opacity: 0,
      y: 100,
      ease: "power4.out",
    });
  }, []);

  return (
    <HeroWrapper>
      <HeroImage src={url} alt={alt} />
      <HeroButton ref={btn} href={bannerLink} target="_blank">
        {bannerTitle}
      </HeroButton>
    </HeroWrapper>
  );
};

export default Hero;
