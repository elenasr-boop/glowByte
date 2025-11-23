import { Popup } from "../../component/PopUps/PopUp";
import { UploadForm } from "../../component/UploadForm/UploadForm";

export function UploadsPage () {
    return (
      <>
        <Popup>
          <h1>📤 Загрузка новых данных</h1>
          <UploadForm />
        </Popup>
      </>
    );
}