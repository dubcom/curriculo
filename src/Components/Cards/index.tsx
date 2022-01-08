import * as S from "./styles";

interface props {
  width: string;
  height: string;
}

const Card: React.FC<props> = ({ children, width, height }) => {
  return (
    <S.Container width={width} height={height}>
      {children}
    </S.Container>
  );
};

export default Card;
