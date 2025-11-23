import styled from "styled-components";

export const PopupOverlay = styled.div`
  position: fixed;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(4px);

  z-index: 1000;
`;

export const PopupContainer = styled.div`
  width: 50%;
  height: 50%;

  background: white;
  border-radius: 16px;
  padding: 24px;

  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  justify-content: start;
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  color: black; 
  width: 3rem;
  height: 3rem;

  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    color: #ff4d4f;
    background: white;
  }
`;
