import axios from "axios";
import { useEffect, useState } from "react";
import * as S from "./styles";

import Folder from "../../Assets/folder.svg";

interface ICard {
  id: number;
  name: string;
}

export default function Repos() {
  const [repos, setRepos] = useState<Array<ICard>>();

  useEffect(() => {
    axios
      .get("https://api.github.com/users/LeonardoWlopes/repos")
      .then((res) => {
        console.log(res.data);

        setRepos(res.data);
      });
  }, []);

  function RepoCard({ id, name }: ICard) {
    return (
      <S.CardContainer>
        <S.Head>
          <S.Folder src={Folder} />
        </S.Head>
      </S.CardContainer>
    );
  }

  return (
    <S.Container>
      <S.TitleContainer>
        <S.Title>Meus Projetos</S.Title>
        <S.Link
          href="https://github.com/LeonardoWlopes?tab=repositories"
          target="_blank"
        >
          Ver todos
        </S.Link>
      </S.TitleContainer>
      <S.ReposContainer>
        {repos?.map((repo) => (
          <RepoCard key={repo.id} id={repo.id} name={repo.name} />
        ))}
      </S.ReposContainer>
    </S.Container>
  );
}
