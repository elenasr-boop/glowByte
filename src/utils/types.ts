export type CoalRow = {
  id: number;
  stack: string;
  type: string;
  days: string;
  temp: string;
  level22: string;
  level23: string;
  level24: string;
};

export type weatherType = {
  temp: number;
  humidity: number;
};

export type tableDataType = {
  pile_id: number;
  coal_type: string;
  formation_date: string;
  days_in_storage: number;
  last_temp: number;
  risk_forecast: {
    day1: string;
    day2: string;
    day3: string;
  };
};

type ApiRiskForecast = Record<string, string>;

export type ApiTableData = {
  pile_id: number;
  coal_type: string;
  formation_date: string;
  days_in_storage: number;
  last_temp: number;
  risk_forecast: ApiRiskForecast;
};
