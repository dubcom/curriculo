import * as S from "./styles";

interface ItemProps {
  name: string;
}

export default function SkillCard() {
  const Skills: Array<ItemProps> = [
    { name: "JAVA SCRIPT" },
    { name: "Type SCRIPT" },
    { name: "React Js" },
    { name: "React Native" },
    { name: "Redux" },
    { name: "Hooks" },
    { name: "html 5" },
    { name: "css 3" },
    { name: "styled components" },
    { name: "node js" },
    { name: "express" },
    { name: "postgresql" },
    { name: "prisma" },
    { name: "express" },
  ];

  function Item({ name }: ItemProps) {
    return (
      <S.ItemContainer>
        <S.Skill>{name}</S.Skill>
      </S.ItemContainer>
    );
  }

  return (
    <S.Container>
      {Skills.map((item, index) => (
        <Item name={item.name} key={index} />
      ))}
    </S.Container>
  );
}
