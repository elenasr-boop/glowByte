import { Link } from "react-router-dom";
import { Image, Wrapper } from "./Error.styled";

export function ErrorPage () {
    return (
      <Wrapper>
        <h3>Возникла какая-то ошибка, но мы уже работаем над этим!</h3>
        <Image
          src="./error-gif.gif"
          alt="Cat Working"
        />
        <Link to="/">
          <button>Вернуться на главную</button>
        </Link>
      </Wrapper>
    );
}