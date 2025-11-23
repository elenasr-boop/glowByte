import { useNavigate } from "react-router-dom";
import { BackButton, ButtonsWrapper } from "../History/History.styled";
import * as S from "./AnalyticsPage.styled";
import { useEffect, useState } from "react";
import { getAnalytics } from "../../api";
import { Loading } from "../../component/Loading/Loading";
import type { analyticsType } from "../../utils/types";

export function AnalyticsPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [analyticsData, setAnalyticsData] = useState<analyticsType | null>(null);

  useEffect(() => {
    async function gettingAnalytics() {
      try {
        const data = await getAnalytics();

        setAnalyticsData(data);
        setIsLoading(false);
      } catch (e: any) {
        console.error(e.message);
        navigate("/error");
      }
    }

    gettingAnalytics();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <S.Container>
          <S.Header>📈 КАЧЕСТВО МОДЕЛИ ПРОГНОЗИРОВАНИЯ</S.Header>

          <S.Metrics>
            <S.Metric $success={analyticsData!.metrics.recall >= 0.7}>
              🎯 Recall ≥ 70% →{" "}
              {analyticsData!.metrics.recall >= 0.7
                ? "✅ Достигнуто"
                : "⚠ Не достигнуто"}
            </S.Metric>
            <S.Metric $success={analyticsData!.metrics.precision >= 0.3}>
              ⚠ Precision ≥ 30% →{" "}
              {analyticsData!.metrics.precision >= 0.3
                ? "✅ Достигнуто"
                : "⚠ Не достигнуто"}
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
              {analyticsData?.fire_events.map((r, i) => (
                <tr key={i}>
                  <S.Td>{r.pile_id}</S.Td>
                  <S.Td>{r.actual_date}</S.Td>
                  <S.Td>{r.predicted_interval}</S.Td>
                  <S.Td $success={r.hit}>{r.hit ? "✅" : "❌"}</S.Td>
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
      )}
    </>
  );
}
