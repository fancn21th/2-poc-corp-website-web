import React, { useState } from "react";
import styled from "styled-components";
import FirstLevel from "./FirstLevelModels";
import SecondLevel from "./SecondLevelModels";
import Vehicles from "./Vehicles";

const ModelsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc(100% - 280px);
`;

const Models = ({ models }) => {
  const defaultModel = Object.keys(models)[0];

  const [secondLevelModel, setSecondLevelModel] = useState(defaultModel);
  const [vehicles, setVehicles] = useState(models[defaultModel]);

  const onModelChange = (model) => {
    setSecondLevelModel(model);
    setVehicles(models[model]);
  };

  return (
    <ModelsWrapper>
      <FirstLevel
        url={`http://localhost:1337/uploads/model_a_18d92e7fa6.png`}
        index={1}
      />
      <SecondLevel
        models={Object.keys(models)}
        activated={secondLevelModel}
        onModelChange={onModelChange}
      />
      <Vehicles vehicles={vehicles} />
    </ModelsWrapper>
  );
};

export default Models;
