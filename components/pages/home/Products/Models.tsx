import React from "react";
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

const Models = ({}) => {
  return (
    <ModelsWrapper>
      <FirstLevel
        url={`http://localhost:1337/uploads/model_a_18d92e7fa6.png`}
        index={1}
      />
      <SecondLevel />
      <Vehicles
        url={`http://localhost:1337/uploads/a3_limousine_df130d3bde.png`}
      />
    </ModelsWrapper>
  );
};

export default Models;
