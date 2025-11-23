import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { PopupOverlay, PopupContainer, CloseButton } from "./PopUp.styled";

interface PopupProps {
  children: ReactNode;
}

export const Popup = ({ children }: PopupProps) => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/");
  };

  return (
    <PopupOverlay>
      <PopupContainer>
        <CloseButton onClick={handleClose}>&times;</CloseButton>
        {children}
      </PopupContainer>
    </PopupOverlay>
  );
};
