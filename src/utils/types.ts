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

export type analyticsType = {
  metrics: {
    precision: number,
    recall: number,
    f1_score: number,
    pr_auc: number
  },
  fire_events: [
    {
      pile_id: number,
      actual_date: string,
      predicted_interval: [string],
      hit: boolean
    }
  ]
}
