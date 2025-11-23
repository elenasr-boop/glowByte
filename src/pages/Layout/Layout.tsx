import { Link, Outlet } from "react-router-dom";
import { Weather } from "../../component/Weather/Weather";
import { UploadButton } from "../../component/UploadButton/UploadButton";
import * as S from "./Layout.styled";

export function Layout() {
  return (
    <S.Main>
      <S.Header>
        <Weather />
        <S.Counter>⏱ Дней без пожаров: 42</S.Counter>
      </S.Header>

      <Outlet />

      <S.Buttons>
        <UploadButton onOpenPopup={() => console.log("popup open")} />
        <Link to="/analytics">
          <button>Посмотреть аналитику</button>
        </Link>
      </S.Buttons>
    </S.Main>
  );
}
