import { Link } from "react-router-dom";
import { Image, TextWrapper, Wrapper } from "./NotFound.styled";

export function NotFoundPage() {
  return (
    <Wrapper>
      <TextWrapper>
        <h2>404</h2>
        <h3>I didn't find anything, sorry</h3>
      </TextWrapper>
      <Image src=".\notFound.png" />
      <Link to="/">
        <button>Вернуться на главную</button>
      </Link>
    </Wrapper>
  );
}
