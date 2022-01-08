import { useEffect, useState } from "react";
import * as S from "./styles";

import UserCard from "../../Components/Cards/UserCard";
import ContactCard from "../../Components/Cards/ContactCard";
import SkillCard from "../../Components/Cards/SkillCard";
import Repos from "../../Components/Repos";

export default function MainScreen() {
  const [isColumn, setIsColumn] = useState(false);

  window.addEventListener("resize", function () {
    window.innerWidth < 740 ? setIsColumn(true) : setIsColumn(false);
  });

  useEffect(() => {
    window.innerWidth < 740 ? setIsColumn(true) : setIsColumn(false);
  }, []);

  return (
    <S.Container isColumn={isColumn}>
      <S.LeftContainer isColumn={isColumn}>
        <UserCard />
        <ContactCard />
        <SkillCard />
      </S.LeftContainer>
      <S.RightContainer isColumn={isColumn}>
        <Repos />
      </S.RightContainer>
    </S.Container>
  );
}
