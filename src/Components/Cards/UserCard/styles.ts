import { colors } from "./../../../Styles/styles";
import styled from "styled-components";

export const Container = styled.div`
  flex-direction: column;
  width: 348px;
  height: 292px;
  background: ${colors.bgcards};
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  padding: 16px;
`;

export const Foto = styled.img`
  width: 128px;
  height: 128px;
  margin: auto;
  border-radius: 50%;
`;

export const UserName = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 23px;
  line-height: 29px;
  color: #837e9f;
  margin: auto;
  text-align: center;
`;

export const UserBio = styled.span`
  font-style: normal;
  font-weight: 300;
  font-size: 13px;
  line-height: 16px;
  color: #837e9f;
  text-align: center;
  margin-top: 8px;

`;

export const InfosContainer = styled.div`
  margin: auto;
  width: 90%;
  min-height: 30%;
  flex-direction: column;
`;
