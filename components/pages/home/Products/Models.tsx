import React from "react";
import styled from "styled-components";
import FirstLevel from "./FirstLevelModels";
import SecondLevel from "./SecondLevelModels";
import Vehicles from "./Vehicles";

const ModelsWrapper = styled.div``;

const Models = ({}) => {
  return (
    <ModelsWrapper>
      <FirstLevel
        url={`http://localhost:1337/uploads/model_a_18d92e7fa6.png`}
        index={1}
      />
      <SecondLevel />
      <Vehicles />
    </ModelsWrapper>
  );
};

export default Models;
