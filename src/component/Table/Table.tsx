import { useNavigate } from "react-router-dom";
import { Table, Th, Td, Tr, TrClickable, Wrapper } from "./Table.styled";
import type { tableDataType } from "../../utils/types";
import { useEffect, useState } from "react";
import { getDashboard } from "../../api/api";
import { Loading } from "../Loading/Loading";
import { normalizeTableData } from "../../utils/utils";

export function CoalTable() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [tableData, setTableData] = useState<null | tableDataType[]>(null);
  useEffect(() => {
    async function gettingDashboard() {
      try {
        const data = await getDashboard();

        console.log(data.piles);
        if (data.piles === null) {
          return; 
        } else {
          setTableData(normalizeTableData(data.piles));
        };
        
        setIsLoading(false);
      } catch (e: any) {
        console.error(e.message);
        navigate("/error")
      }
    }

    gettingDashboard();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Wrapper>
          <Table>
            <thead>
              <Tr>
                <Th>Штабель</Th>
                <Th>Тип угля</Th>
                <Th>В хранилище</Th>
                <Th>Посл. темп.</Th>
                <Th>2025-11-22</Th>
                <Th>2025-11-23</Th>
                <Th>2025-11-24</Th>
              </Tr>
            </thead>

            <tbody>
              {tableData!.map((row) => (
                <TrClickable
                  key={row.pile_id}
                  onClick={() => navigate(`/pile/${row.pile_id}/history`)}
                >
                  <Td>{row.coal_type}</Td>
                  <Td>{row.coal_type}</Td>
                  <Td>{row.days_in_storage}</Td>
                  <Td>{row.last_temp}</Td>

                  <Td level={row.risk_forecast.day1}>
                    {row.risk_forecast.day1}
                  </Td>
                  <Td level={row.risk_forecast.day2}>
                    {row.risk_forecast.day2}
                  </Td>
                  <Td level={row.risk_forecast.day3}>
                    {row.risk_forecast.day3}
                  </Td>
                </TrClickable>
              ))}
            </tbody>
          </Table>
        </Wrapper>
      )}
    </>
  );
}
