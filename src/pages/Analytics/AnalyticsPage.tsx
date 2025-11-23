import { useNavigate } from "react-router-dom";
import { BackButton, ButtonsWrapper } from "../History/History.styled";
import * as S from "./AnalyticsPage.styled";

export function AnalyticsPage () {
  const navigate = useNavigate();

    const records = [
      {
        stackId: "#15",
        factDate: "2025-11-20",
        forecastInterval: "2025-11-17 – 2025-11-19",
        success: true,
      },
      {
        stackId: "#6",
        factDate: "2025-11-25",
        forecastInterval: "2025-11-22 – 2025-11-24",
        success: false,
      },
    ];

    let recall=75; let precision=35;

  return (
    <S.Container>
      <S.Header>📈 КАЧЕСТВО МОДЕЛИ ПРОГНОЗИРОВАНИЯ</S.Header>

      <S.Metrics>
        <S.Metric success={recall >= 70}>
          🎯 Recall ≥ 70% → {recall >= 70 ? "✅ Достигнуто" : "⚠ Не достигнуто"}
        </S.Metric>
        <S.Metric success={precision >= 30}>
          ⚠ Precision ≥ 30% →{" "}
          {precision >= 30 ? "✅ Достигнуто" : "⚠ Не достигнуто"}
        </S.Metric>
      </S.Metrics>

      <S.Table>
        <thead>
          <tr>
            <S.Th>Штабель</S.Th>
            <S.Th>Факт (дата)</S.Th>
            <S.Th>Прогноз (интервал)</S.Th>
            <S.Th>Успех?</S.Th>
          </tr>
        </thead>
        <tbody>
          {records.map((r, i) => (
            <tr key={i}>
              <S.Td>{r.stackId}</S.Td>
              <S.Td>{r.factDate}</S.Td>
              <S.Td>{r.forecastInterval}</S.Td>
              <S.Td success={r.success}>{r.success ? "✅" : "❌"}</S.Td>
            </tr>
          ))}
        </tbody>
      </S.Table>
      <ButtonsWrapper>
        <BackButton onClick={() => navigate("/")}>
          ◄ Назад к дашборду
        </BackButton>
      </ButtonsWrapper>
    </S.Container>
  );
};
