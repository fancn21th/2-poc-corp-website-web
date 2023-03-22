import React from "react";
import styled from "styled-components";

interface TabItemProps {
  active?: boolean;
}

const TabsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 280px;
`;

const TabList = styled.ul`
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
  text-align: center;
  line-height: 110px;
`;

const Tabs = ({}) => {
  return (
    <TabsWrapper>
      <TabList>
        <TabItem active={true}>车型</TabItem>
        <TabItem>车辆类型</TabItem>
      </TabList>
    </TabsWrapper>
  );
};

export default Tabs;
