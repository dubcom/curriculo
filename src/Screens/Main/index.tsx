import { useState } from "react";
import * as S from "./styles";

import UserCard from "../../Components/Cards/UserCard";

export default function MainScreen() {

  return (
    <S.Container>
      <S.LeftContainer>
        <UserCard />
      </S.LeftContainer>
      <S.RightContainer></S.RightContainer>
    </S.Container>
  );
}
