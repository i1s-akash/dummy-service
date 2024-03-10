import {
  TableContainer,
  Table,
  StyledTableCell,
  TableBody,
  TableHead,
} from "@mui/material";
import { StyledTableCell, StyledTableRow } from "./TableC";
import style from "./style.module.scss";

export const Services = ({ headers, services }) => {
  return (
    <TableContainer sx={{borderRadius: "10px 10px 0 0"}}>
      <Table size="small">
        <TableHead className={style.tableHeader}>
          <StyledTableRow>
            {headers.length > 0 &&
              headers.map((list, index) => (
                <StyledTableCell key={index} sx={{ color: "#fff" }}>
                  {list}
                </StyledTableCell>
              ))}
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {services.length > 0 &&
            services.map((list, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell>{list.package}</StyledTableCell>
                <StyledTableCell>{list.quantity}</StyledTableCell>
                <StyledTableCell>{list.minimumTime}</StyledTableCell>
                <StyledTableCell>{list.standardHours}</StyledTableCell>
                <StyledTableCell>{list.extended}</StyledTableCell>
                <StyledTableCell>{list.recurring}</StyledTableCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
