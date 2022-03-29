import styled from "styled-components";

export const Flex = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : "row")};
  justify-content: ${(props) => (props.justify ? props.justify : "flex-start")};
  align-items: ${(props) => (props.align ? props.align : "center")};
`;

export const Page = styled.main`
  width: 100%;
  min-height: 100vh;
`;
