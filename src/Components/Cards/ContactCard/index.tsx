import { useContext } from "react";
import UserContext from "../../../Context/UserContext";
import * as S from "./styles";

import GitHub from "../../../Assets/github.svg";
import Instagram from "../../../Assets/instagram.svg";
import Linkedin from "../../../Assets/linkedin.svg";
import Email from "../../../Assets/mail.svg";
import MapPin from "../../../Assets/map-pin.svg";

export default function ContactCard() {
  const { user } = useContext(UserContext);

  return (
    <S.Container>
      <S.Linha>
        <S.Icone src={MapPin} />
        <S.Text>{user?.location}</S.Text>
      </S.Linha>
      <S.Linha>
        <S.Icone src={GitHub} />
        <S.Link href={user?.html_url} target={"_blank"}>
          {user?.login}
        </S.Link>
      </S.Linha>
      <S.Linha>
        <S.Icone src={Linkedin} />
        <S.Link
          href="https://www.linkedin.com/in/compromitto/"
          target={"_blank"}
        >
          Marcos Antonio 
        </S.Link>
      </S.Linha>

      <S.Linha>
        <S.Icone src={Instagram} />
        <S.Link
          href="https://www.instagram.com/marcofinal"
          target={"_blank"}
        >
          MarcoFinal
        </S.Link>
      </S.Linha>
      <S.Linha>
        <S.Icone src={Email} />
        <S.Link href="mailto:marcos@compromitto.com.br" target={"_blank"}>
          marcos@compromitto.com.br
        </S.Link>
      </S.Linha>
    </S.Container>
  );
}
