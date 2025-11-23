import type { ApiTableData, tableDataType } from "./types";

export function normalizeTableData(piles: ApiTableData[]): tableDataType[] {
  return piles.map((data) => {
    const forecastValues = Object.values(data.risk_forecast);

  return {
    pile_id: data.pile_id,
    coal_type: data.coal_type,
    formation_date: data.formation_date,
    days_in_storage: data.days_in_storage,
    last_temp: data.last_temp,
    risk_forecast: {
      day1: forecastValues[0] ?? "",
      day2: forecastValues[1] ?? "",
      day3: forecastValues[2] ?? "",
    },
  }
  });
}