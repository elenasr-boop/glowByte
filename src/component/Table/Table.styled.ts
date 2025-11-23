import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  overflow-x: auto;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: center;
  font-family: Arial, sans-serif;
  table-layout: fixed;
`;

export const Th = styled.th`
  border: 1px solid #ccc;
  padding: 8px;
  background: #f7f7f7;
  font-weight: bold;
  overflow-wrap: break-word;
  white-space: normal;
`;

export const Td = styled.td<{ level?: string }>`
  border: 1px solid #ccc;
  padding: 8px;
  overflow-wrap: break-word;
  white-space: normal;

  /* Окраска уровней */
  ${({ level }) =>
    level === "low" &&
    `
      background-color: #d4f8d4;
      color: #0b6b0b;
      font-weight: bold;
    `}

  ${({ level }) =>
    level === "medium" &&
    `
      background-color: #fff7cc;
      color: #b38a00;
      font-weight: bold;
    `}

  ${({ level }) =>
    level === "high" &&
    `
      background-color: #ffd6d6;
      color: #a30000;
      font-weight: bold;
    `}
`;

export const Tr = styled.tr`
  &:nth-child(even) {
    background: #fafafa;
  }
`;

export const TrClickable = styled.tr`
  cursor: pointer;

  &:hover {
    background-color: #e3f2ff;
  }
`;
