import React from "react";
import styled from "styled-components";

interface TabItemProps {
  active?: boolean;
}

const Slider = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
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

const SecondLevelModels = ({ models, activated, onModelChange }) => {
  const activatedModel = activated || models[0];
  return (
    <Slider>
      {/* pre */}
      <SliderItem>&lt;</SliderItem>
      {models.map((model) => (
        <SliderItem
          active={activatedModel === model}
          key={model}
          onClick={() => {
            onModelChange(model);
          }}
        >
          {model}
        </SliderItem>
      ))}
      {/* next */}
      <SliderItem>&gt;</SliderItem>
    </Slider>
  );
};

export default SecondLevelModels;
