import { CoalTable } from "../../component/Table/Table.tsx";
import { mockData } from "../../utils/mockData.ts";
import * as S from "./Main.styled.ts";

export function MainPage() {
  return (
    <S.Container>
      <S.Lead>КАЛЕНДАРЬ РИСКА САМОВОЗГОРАНИЯ УГЛЯ</S.Lead>
      <CoalTable rows={mockData} />
    </S.Container>
  );
}
