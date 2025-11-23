import styled from "styled-components";

export const Container = styled.div`
margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 2rem;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
`;

export const Header = styled.div`
  font-weight: 600;
  font-size: 18px;
`;

export const TempSection = styled.div`
  font-size: 20px;
  font-weight: 600;
`;

export const RiskIndicator = styled.span<{ risk: string }>`
  color: ${({ risk }) =>
    risk === "low" ? "#0b6b0b" : risk === "medium" ? "#b38a00" : "#a30000"};
  font-weight: bold;
`;



export const HistoryTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: center;
`;

export const Th = styled.th`
  border: 1px solid #ccc;
  padding: 8px;
  background: #f7f7f7;
  font-weight: bold;
`;

export const Td = styled.td<{ risk?: string }>`
  border: 1px solid #ccc;
  padding: 8px;
  ${({ risk }) =>
    risk === "low"
      ? "color: #0b6b0b; font-weight: bold;"
      : risk === "medium"
      ? "color: #b38a00; font-weight: bold;"
      : risk === "high"
      ? "color: #a30000; font-weight: bold;"
      : ""}
`;

export const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  justify-content: space-between;
`;

export const Button = styled.button`
  padding: 12px 20px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    opacity: 0.85;
  }
`;

export const BackButton = styled(Button)`
  background: #ccc;
  color: #000;
`;

export const DownloadButton = styled(Button)`
  background: #4a90e2;
  color: white;
`;
