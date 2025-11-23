import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
  }

  button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  width: 280px;
  padding: 18px 24px;

  background: #4a90e2;
  color: white;

  border: none;
  border-radius: 14px;

  font-size: 20px;
  font-weight: 600;

  cursor: pointer;
  transition: 0.25s ease;

  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);

  &:hover {
    background: #3f7fcc;
    transform: translateY(-2px);
    box-shadow: 0 10px 18px rgba(0, 0, 0, 0.25);
  }

  &:active {
    transform: translateY(0px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
  }

  a {
  text-decoration: none;
  }
`;