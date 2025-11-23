import type { weatherType } from '../../utils/types';

type WeatherProps = {
  weatherData: weatherType,
}

export function Weather ({weatherData}: WeatherProps) {
    return (
      <>
        🌤 Погода сегодня: {weatherData.temp}°C, {weatherData.humidity}% влажности | 📅 Последнее обновление: 2025-
        11-22 10:00
      </>
    );
}