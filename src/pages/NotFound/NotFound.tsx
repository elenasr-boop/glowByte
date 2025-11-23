import { Link } from "react-router-dom";
import { Image, Wrapper } from "./NotFound.styled";

export function NotFoundPage() {
  return (
    <Wrapper>
      <h3>I didn't find anything, sorry</h3>
      <Image src=".\notFound.png" />
      <Link to="/">
        <button>Вернуться на главную</button>
      </Link>
    </Wrapper>
  );
}
