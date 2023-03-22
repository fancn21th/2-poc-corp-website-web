import React from "react";
import styled from "styled-components";

interface TabItemProps {
  active?: boolean;
}

const Slider = styled.ul`
  display: flex;
  list-style-type: none;
  margin:
  padding: 0;
  height: 25px;
`;

const SliderItem = styled.li<TabItemProps>`
  width: 30px;
  height: 35px;
  border-bottom: ${(props) => (props.active ? "2px solid black" : "")};
  text-align: center;
  margin: 0 5px;
  cursor: pointer;
`;

const SecondLevelModels = ({}) => {
  return (
    <Slider>
      <SliderItem>&lt;</SliderItem>
      <SliderItem active={true}>A3</SliderItem>
      <SliderItem>A4</SliderItem>
      <SliderItem>A5</SliderItem>
      <SliderItem>A6</SliderItem>
      <SliderItem>A7</SliderItem>
      <SliderItem>&gt;</SliderItem>
    </Slider>
  );
};

export default SecondLevelModels;
