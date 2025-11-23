import { Link, Outlet, useNavigate } from "react-router-dom";
import { Weather } from "../../component/Weather/Weather";
import { UploadButton } from "../../component/UploadButton/UploadButton";
import * as S from "./Layout.styled";
import { getDashboard } from "../../api/api";
import { Loading } from '../../component/Loading/Loading';
import { useEffect, useState } from "react";
import type { weatherType } from "../../utils/types";

export function Layout() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [weatherData, setWeatherData] = useState<weatherType | null>();
  const [dayCounter, setDayCouner] = useState<number>(0);

  useEffect(() => {
    async function gettingDashboard() {
      try {
        const data = await getDashboard();

        setWeatherData({
          temp: data.weather_summary.temp_avg,
          humidity: data.weather_summary.humidity,
        });
        setDayCouner(data.days_without_fire);
        setIsLoading(false);
      } catch (e: any) {
        console.error(e.message);
        navigate("/error");
      }
    }

    gettingDashboard();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <S.Main>
          <S.Header>
            <Weather weatherData={weatherData!} />
            <S.Counter>⏱ Дней без пожаров: {dayCounter}</S.Counter>
          </S.Header>

          <Outlet />

          <S.Buttons>
            <UploadButton/>
            <Link to="/analytics">
              <button>Посмотреть аналитику</button>
            </Link>
          </S.Buttons>
        </S.Main>
      )}
    </>
  );
}
