import styled from "styled-components";

const ContainerWrapper = styled.div`
  position: relative;
`;

const Container = ({ children }) => {
  return <ContainerWrapper>{children}</ContainerWrapper>;
};

export default Container;
