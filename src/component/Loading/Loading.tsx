import * as S from "./Loading.styled";

export function Loading () {
    return (
      <S.Overlay>
        <img
          src="./cat-cute.gif"
          alt="Cat Loading"
          style={{ width: 150, height: 150 }}
        />
        <S.Message>Загрузка данных…</S.Message>
      </S.Overlay>
    );
}