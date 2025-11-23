import styled from "styled-components";

export const Container = styled.div`
  margin-top: 2rem;
  margin-right: 2rem;
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
`;

export const Header = styled.div`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
`;

export const Metrics = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Metric = styled.div<{ $success?: boolean }>`
  font-size: 16px;
  font-weight: 600;
  color: ${({ $success }) => ($success ? "#0b6b0b" : "#a30000")};
`;

export const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
`;

export const Table = styled.table`
  width: max-content;
  border-collapse: collapse;
  text-align: center;
  table-layout: fixed;
  width: 100%;
`;

export const Th = styled.th`
  border: 1px solid #ccc;
  padding: 8px;
  background: #f7f7f7;
  font-weight: bold;
  overflow-wrap: break-word;
  white-space: normal;
`;

export const Td = styled.td<{ $success?: boolean }>`
  border: 1px solid #ccc;
  padding: 8px;
  overflow-wrap: break-word;
  white-space: normal;
  color: ${({ $success }) =>
    $success === undefined ? "#000" : $success ? "#0b6b0b" : "#a30000"};
  font-weight: ${({ $success }) => ($success !== undefined ? "bold" : "normal")};
`;
