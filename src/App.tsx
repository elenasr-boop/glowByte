import { Route, Routes } from "react-router-dom"
import { GlobalStyle } from "./Global.styled.ts";
import { MainPage } from "./pages/Main/Main"
import { NotFoundPage } from "./pages/NotFound/NotFound"
import { UploadsPage } from "./pages/Uploads/Uploads"
import { HistoryPage } from "./pages/History/History"
import { AnalyticsPage } from "./pages/Analytics/AnalyticsPage.tsx";
import { Layout } from "./pages/Layout/Layout.tsx";

function App() {

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="upload" element={<UploadsPage />} />
          <Route path="/pile/:pileId/history" element={<HistoryPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App
