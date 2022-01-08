import styled from "styled-components";
import { colors } from "../../Styles/styles";

import SVG from "react-inlinesvg";

export const Container = styled.div`
  width: 95%;
  //background-color: blue;
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

export const ReposContainer = styled.div`
  margin: 16px auto;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  //background-color: red;

  width: 100%;
  height: auto;
`;

export const CardContainer = styled.div`
  max-width: 380px;
  min-width: 300px;
  width: 100%;
  height: 186px;
  margin: 8px auto;
  background: ${colors.bgcards};
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
`;

export const Head = styled.div`
  position: relative;
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: min-content;
  align-items: center;
  top: 30px;
  padding: 0px 32px;
`;

export const Folder = styled(SVG)`
  width: 25px;
  height: 25px;
  color: ${colors.textcolor};
`;
