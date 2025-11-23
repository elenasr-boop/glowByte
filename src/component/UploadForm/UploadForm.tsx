import { useState } from "react";
import * as S from "./UploadForm.styled";

type DataType = "temp" | "fires" | "coal" | "";

export function UploadForm () {
  const [file, setFile] = useState<File | null>(null);
  const [dataType, setDataType] = useState<DataType>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] ?? null;
    if (selectedFile && selectedFile.name.endsWith(".csv")) {
      setFile(selectedFile);
    } else {
      setFile(null);
      alert("Пожалуйста, выберите файл формата CSV");
    }
  };

  const handleDataTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDataType(e.target.value as DataType);
  };

  const handleUpload = () => {
    if (!file || !dataType) return;
    console.log("Загружаем:", file.name, "Тип данных:", dataType);
  };

  const isButtonDisabled = !file || !dataType;

  return (
    <>
      <S.TypeForm>
        <S.Label>Выберите тип данных:</S.Label>
        <S.RadioGroup>
          <label>
            <input
              type="radio"
              name="dataType"
              value="temp"
              checked={dataType === "temp"}
              onChange={handleDataTypeChange}
            />{" "}
            Температурные замеры
          </label>
          <label>
            <input
              type="radio"
              name="dataType"
              value="fires"
              checked={dataType === "fires"}
              onChange={handleDataTypeChange}
            />{" "}
            Факты возгораний
          </label>
          <label>
            <input
              type="radio"
              name="dataType"
              value="coal"
              checked={dataType === "coal"}
              onChange={handleDataTypeChange}
            />{" "}
            Поступление/отгрузка угля
          </label>
        </S.RadioGroup>
      </S.TypeForm>

      <S.FileForm>
        <S.Label>📎 Выберите файл:</S.Label>
        <S.FileInput type="file" accept=".csv" onChange={handleFileChange} />
        {file && <S.FileName>{file.name}</S.FileName>}
      </S.FileForm>

      <S.UploadButton disabled={isButtonDisabled} onClick={handleUpload}>
        ▶ Загрузить
      </S.UploadButton>
    </>
  );
};
