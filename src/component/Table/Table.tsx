import { useNavigate } from "react-router-dom";
import { Table, Th, Td, Tr, TrClickable, Wrapper } from "./Table.styled";
import type { CoalRow } from "../../utils/types";

interface CoalTableProps {
  rows: CoalRow[];
}

export const CoalTable = ({ rows }: CoalTableProps) => {
    const navigate = useNavigate();

  return (
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
          {rows.map((row) => (
            <TrClickable
              key={row.id}
              onClick={() => navigate(`/pile/${row.id}/history`)}
            >
              <Td>{row.stack}</Td>
              <Td>{row.type}</Td>
              <Td>{row.days}</Td>
              <Td>{row.temp}</Td>

              <Td level={row.level22}>{row.level22}</Td>
              <Td level={row.level23}>{row.level23}</Td>
              <Td level={row.level24}>{row.level24}</Td>
            </TrClickable>
          ))}
        </tbody>
      </Table>
    </Wrapper>
  );
};
