import { useState } from "react";
import * as S from "./styles";

import UserCard from "../../Components/Cards/UserCard";
import ContactCard from "../../Components/Cards/ContactCard";

export default function MainScreen() {
  return (
    <S.Container>
      <S.LeftContainer>
        <UserCard />
        <ContactCard />
      </S.LeftContainer>
      <S.RightContainer></S.RightContainer>
    </S.Container>
  );
}
