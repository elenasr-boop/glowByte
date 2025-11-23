import { useNavigate, useParams } from "react-router-dom";
import * as S from "./History.styled";
import { useEffect, useRef, useState } from "react";
import type { HistoryType } from "../../utils/types";
import { getHistory } from "../../api/api";
import { Loading } from "../../component/Loading/Loading";
import { downloadCSV } from "../../utils/utils";

export function HistoryPage() {
  const navigate = useNavigate();
  const { pileId } = useParams();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isDownloading, setIsDownloading] = useState<boolean>(false);
  const [historyData, setHistoryData] = useState<HistoryType | null>(null);
  const timerRef = useRef<number | null>(null);

  const handleBack = () => navigate("/");
  const handleDownload = () => {
    if (!historyData) return;
    setIsDownloading(true);
    downloadCSV(historyData);

    timerRef.current = window.setTimeout(() => {
      setIsDownloading(false);
      timerRef.current = null;
    }, 5000);
  };

  useEffect(() => {
    async function gettingHistory() {
      try {
        const data = await getHistory(pileId!);

        setHistoryData(data);
        setIsLoading(false);
      } catch (e: any) {
        console.error(e.message);
        navigate("/error");
      }
    }

    gettingHistory();

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <S.Container>
          <S.Header>
            Штабель #{historyData?.pile_id} • Тип угля: {historyData?.coal_type}{" "}
            • Сформирован: {historyData?.formation_date}
          </S.Header>

          <S.TempSection>
            🌡 Последняя температура: {historyData?.last_temp}°C{" "}
            <S.RiskIndicator
              $risk={
                historyData!.risk_history[historyData!.risk_history!.length - 1]
                  .level
              }
            >
              {historyData!.risk_history[
                historyData!.risk_history.length - 1
              ].level.toUpperCase()}
            </S.RiskIndicator>
          </S.TempSection>

          <S.HistoryTable>
            <thead>
              <tr>
                <S.Th>Дата</S.Th>
                <S.Th>Температура</S.Th>
                <S.Th>Риск</S.Th>
              </tr>
            </thead>
            <tbody>
              {historyData?.temperature_history.map((item) => {
                const risk = historyData.risk_history.find(
                  (el) => el.date === item.date
                )?.level;
                if (risk === undefined) {
                  return;
                } else {
                  return (
                    <tr key={item.date}>
                      <S.Td>{item.date}</S.Td>
                      <S.Td>{item.temp.toFixed(1)}°C</S.Td>
                      <S.Td $risk={risk}>{risk}</S.Td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </S.HistoryTable>

          <S.ButtonsWrapper>
            <S.BackButton onClick={handleBack}>◄ Назад к дашборду</S.BackButton>
            {isDownloading ? (
              <>Загрузка...</>
            ) : (
              <S.DownloadButton
                onClick={handleDownload}
                disabled={isDownloading ? true : false}
              >
                📥 Скачать историю (CSV)
              </S.DownloadButton>
            )}
          </S.ButtonsWrapper>
        </S.Container>
      )}
    </>
  );
}
