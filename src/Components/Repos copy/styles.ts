import styled from "styled-components";
import { colors } from "../../Styles/styles";

interface props {
  color?: string;
  open?: Boolean;
  isColumn?: boolean;
}

export const Container = styled.div`
  width: 100%;
  // background-color: blue;
  display: flex;
  flex-direction: column;
  margin: 0px auto;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  flex-direction: row;
  max-width: 100%;
  height: 85px;
  background: ${colors.bgcards};
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  padding: 0px 32px;
`;

export const Title = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 25px;
  color: ${colors.textcolor};
`;

export const Link = styled.a`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: ${colors.textcolor};
`;

export const StatsContainer = styled.div<props>`
  margin: 16px auto;
  display: flex;
  flex-direction: column;
  //background-color: red;
  width: 100%;
  height: 250px;
  align-items: center;
  justify-content: space-between;
`;

export const Stats = styled.img``;
