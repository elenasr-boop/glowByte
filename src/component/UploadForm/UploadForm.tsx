import { useState } from "react";
import * as S from "./UploadForm.styled";
import { uploadFile } from "../../api";

type DataType = "temperature" | "fires" |"supplies" | "weather" | "";

export function UploadForm() {
  const [file, setFile] = useState<File | null>(null);
  const [dataType, setDataType] = useState<DataType>("");
  const [message, setMessage] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] ?? null;
    if (selectedFile && selectedFile.name.endsWith(".csv")) {
      setMessage("");
      setFile(selectedFile);
    } else {
      setFile(null);
      setMessage("Пожалуйста, выберите файл формата CSV");
    }
  };

  function handleDataTypeChange(e: React.ChangeEvent<HTMLInputElement>) {
    setMessage("");
    setDataType(e.target.value as DataType);
  }

  async function handleUpload() {
    setMessage("Загружаю...");
    if (!file || !dataType) return;

    try {
      await uploadFile({ file, dataType });
      setMessage("Загрузка прошла успешно");
    } catch (err: any) {
      if (err.status === 400 || err.status === 422) {
        let msg = "Ошибка загрузки";

        if (err.data?.detail) {
          if (Array.isArray(err.data.detail)) {
            msg = err.data.detail.map((d: any) => d.msg).join(", ");
          } else if (typeof err.data.detail === "object") {
            msg = err.data.detail.msg ?? msg;
          }
        }

        setMessage(`Ошибка: ${msg}`);
      } else {
        setMessage(`Ошибка: ${err.message}`);
      }
    }
  }

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
              value="temperature"
              checked={dataType === "temperature"}
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
              value="supplies"
              checked={dataType === "supplies"}
              onChange={handleDataTypeChange}
            />{" "}
            Поступление/отгрузка угля
          </label>
          <label>
            <input
              type="radio"
              name="dataType"
              value="weather"
              checked={dataType === "weather"}
              onChange={handleDataTypeChange}
            />{" "}
            Погодные замеры
          </label>
        </S.RadioGroup>
      </S.TypeForm>

      <S.FileForm>
        <S.Label>📎 Выберите файл:</S.Label>
        <S.FileInput type="file" accept=".csv" onChange={handleFileChange} />
        {file && <S.FileName>{file.name}</S.FileName>}
      </S.FileForm>

      <S.Message>{message}</S.Message>

      <S.UploadButton disabled={isButtonDisabled} onClick={handleUpload}>
        ▶ Загрузить
      </S.UploadButton>
    </>
  );
}
