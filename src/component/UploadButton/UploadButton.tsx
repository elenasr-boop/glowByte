import { useNavigate } from "react-router-dom";

interface Props {
  onOpenPopup: () => void;
}

export const UploadButton = ({ onOpenPopup }: Props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/upload");
    onOpenPopup();
  };

  return (
    <button onClick={handleClick}>
      Загрузить CSV
    </button>
  );
};
