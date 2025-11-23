import { useNavigate } from "react-router-dom";

export const UploadButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/upload");
  };

  return (
    <button onClick={handleClick}>
      Загрузить CSV
    </button>
  );
};
