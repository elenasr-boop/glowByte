import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const Message = styled.div`
  margin-top: 1rem;
  font-size: 1.2rem;
  color: #333;
  text-align: center;
`;