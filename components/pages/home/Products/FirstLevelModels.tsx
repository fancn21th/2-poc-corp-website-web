import React from "react";
import styled from "styled-components";

interface TabItemProps {
  active?: boolean;
}

const ActivatedModelImage = styled.img`
  width: 384px;
  height: 246px;
`;

const Slider = styled.ul`
  display: flex;
  list-style-type: none;
  margin:
  padding: 0;
`;

const SliderItem = styled.li<TabItemProps>`
  width: 30px;
  height: 15px;
  background-color: ${(props) => (props.active ? "#000" : "#f5f5f5")};
  margin: 0 5px;
  cursor: pointer;
`;

const FirstLevelModels = ({ url, index }) => {
  return (
    <>
      <ActivatedModelImage src={url} alt="" />
      <Slider>
        <SliderItem active={true} />
        <SliderItem />
        <SliderItem />
        <SliderItem />
        <SliderItem />
        <SliderItem />
      </Slider>
    </>
  );
};

export default FirstLevelModels;
