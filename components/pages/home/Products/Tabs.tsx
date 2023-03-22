import React from "react";
import styled from "styled-components";

interface TabItemProps {
  active?: boolean;
}

const TabsWrapper = styled.ul`
  display: inline-block;
  list-style-type: none;
  margin:
  padding: 0;
`;

const TabItem = styled.li<TabItemProps>`
  color: #666;
  padding: 0 15px;
  border-right: ${(props) => (props.active ? "4px solid black" : "")};
  height: 110px;
  margin-bottom: 80px;
  cursor: pointer;
`;

const Tabs = ({}) => {
  return (
    <TabsWrapper>
      <TabItem active={true}>车型</TabItem>
      <TabItem>车辆类型</TabItem>
    </TabsWrapper>
  );
};

export default Tabs;
