import { useNavigate } from "react-router-dom";
import { mockHistoryPage } from '../../utils/mockData';
import * as S from "./History.styled";

export function HistoryPage () {
  const navigate = useNavigate();

  const handleBack = () => navigate("/");
  const handleDownload = () => {
    console.log("Скачиваем CSV...");
  };

  return (
    <S.Container>
      <S.Header>
        Штабель #{mockHistoryPage.stackId} • Тип угля:{" "}
        {mockHistoryPage.coalType} • Сформирован:{" "}
        {mockHistoryPage.formationDate}
      </S.Header>

      <S.TempSection>
        🌡 Последняя температура: {mockHistoryPage.lastTemp}°C{" "}
        <S.RiskIndicator risk={mockHistoryPage.lastRisk}>
          {mockHistoryPage.lastRisk.toUpperCase()}
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
          {mockHistoryPage.history.map((item) => (
            <tr key={item.date}>
              <S.Td>{item.date}</S.Td>
              <S.Td>{item.temperature.toFixed(1)}°C</S.Td>
              <S.Td risk={item.risk}>{item.risk}</S.Td>
            </tr>
          ))}
        </tbody>
      </S.HistoryTable>

      <S.ButtonsWrapper>
        <S.BackButton onClick={handleBack}>◄ Назад к дашборду</S.BackButton>
        <S.DownloadButton onClick={handleDownload}>
          📥 Скачать историю (CSV)
        </S.DownloadButton>
      </S.ButtonsWrapper>
    </S.Container>
  );
};
