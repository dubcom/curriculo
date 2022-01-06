import { useContext } from "react";
import UserContext from "../../../Context/UserContext";
import * as S from "./styles";

import MapPin from "../../../Assets/map-pin.svg";
import GitHub from "../../../Assets/github.svg";
import Linkedin from "../../../Assets/linkedin.svg";
import Instagram from "../../../Assets/instagram.svg";
import Email from "../../../Assets/mail.svg";

export default function ContactCard() {
  const { user } = useContext(UserContext);

  return (
    <S.Container>
      <S.Linha>
        <S.Icone src={MapPin} />
        <S.Text>Brasil</S.Text>
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
          href="https://www.linkedin.com/in/leonardowilliamlopes/"
          target={"_blank"}
        >
          Leonardo William Lopes
        </S.Link>
      </S.Linha>

      <S.Linha>
        <S.Icone src={Instagram} />
        <S.Link
          href="https://www.instagram.com/leonardowlopes/?hl=pt-br"
          target={"_blank"}
        >
          LeonardoWLopes
        </S.Link>
      </S.Linha>
      <S.Linha>
        <S.Icone src={Email} />
        <S.Link href="mailto:leonardolopessocial@gmail.com" target={"_blank"}>
          leonardolopessocial@gmail.com
        </S.Link>
      </S.Linha>
    </S.Container>
  );
}
