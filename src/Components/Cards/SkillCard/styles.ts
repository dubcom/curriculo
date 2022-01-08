import { colors } from "../../../Styles/styles";
import styled from "styled-components";

export const Container = styled.div`
  margin: 16px 0px;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  width: 100%;
  max-width: 320px;
  min-width: 165px;
  min-height: 200px;
  background: ${colors.bgcards};
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  padding: 16px;
`;

export const Title = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 25px;
  color: ${colors.textcolor};
`;

export const ItemContainer = styled.div`
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: center;
  width: 90px;
  height: 35px;
  background: #cb92b1;
  border-radius: 30px;
`;

export const Skill = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  line-height: 13px;
  text-align: center;
  text-transform: uppercase;

  color: #000000;
`;
