import type { ApiTableData, HistoryType, tableDataType } from "./types";

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
};

function convertHistoryToCSV(history: HistoryType): string {
  const rows = [
    ["date", "temp", "level", "probability"], 
  ];

  for (const tempItem of history.temperature_history) {
    const riskItem = history.risk_history.find((r) => r.date === tempItem.date);

    rows.push([
      tempItem.date,
      tempItem.temp.toString(),
      riskItem?.level ?? "",
      riskItem?.probability?.toString() ?? "",
    ]);
  }

  return rows.map((row) => row.join(",")).join("\n");
}

export function downloadCSV(history: HistoryType) {
  const csv = convertHistoryToCSV(history);

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", `history_pile_${history.pile_id}.csv`);
  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

