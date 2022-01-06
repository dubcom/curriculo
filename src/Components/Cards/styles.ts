import styled from "styled-components";

interface props {
  width: string;
  height: string;
}

export const Container = styled.div<props>`
  width: ${(props) => props.width};
  min-height: 80px;
  height: ${(props) => (props.height ? props.height : "min-content")};
  background-color: #302f3d;
  border-radius: 20px;
  flex-direction: column;
`;
