import React from "react";
import styled from "styled-components";

const ActivatedVehicleImage = styled.img`
  width: 224px;
`;

const VehiclesWrapper = styled.ul`
  width: 100%;
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const VehicleItem = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 0 15px rgb(0 0 0 / 9%);
  background-color: #fff;
  min-width: 248px;
  max-width: 248px;
  margin: 6px 0 6px 20px;
  outline: 0;
`;

const VehicleCTA = styled.a`
  width: 164px;
  height: 44px;
  border: solid 1px #000;
  background-color: #fff;
  outline: 0;
  font-size: 12px;
  line-height: 44px;
  text-align: center;
  color: #000;
`;

const MoreActions = styled.div`
  box-shadow: 0 -1px 0 0 #f2f2f2;
  background-color: #fff;
  padding: 10px;
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: center;

  & a {
    overflow: hidden;
    overflow-wrap: break-word;
    white-space: nowrap;
    height: 20px;
    font-size: 8px;
    margin: 0 5px;
  }
`;

const Vehicles = ({ url }) => {
  return (
    <VehiclesWrapper>
      <VehicleItem>
        <h3>A3 Limousine</h3>
        <ActivatedVehicleImage src={url} />
        <VehicleCTA>查看车型信息</VehicleCTA>
        <MoreActions>
          <a>查看销商</a>
          <a>预约试驾</a>
        </MoreActions>
      </VehicleItem>
      <VehicleItem>
        <h3>A3 Limousine</h3>
        <ActivatedVehicleImage src={url} />
        <VehicleCTA>查看车型信息</VehicleCTA>
        <MoreActions>
          <a>查看销商</a>
          <a>预约试驾</a>
        </MoreActions>
      </VehicleItem>
    </VehiclesWrapper>
  );
};

export default Vehicles;
