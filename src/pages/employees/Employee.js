import { Box, Paper, TableBody, TableCell, TableRow } from "@mui/material";
import { useState } from "react";
import useTable from "../../components/useTable";
import EmployeeForm from "./EmployeeForm";
// import PageHeader from "../../components/PageHeader";
import * as employeeService from "../../services/EmployeeServices";

const headCells = [
  { id: "fullName", label: "Employee Name" },
  { id: "email", label: "Email Address (Personal)" },
  { id: "mobile", label: "Mobile Number" },
  { id: "department", label: "Department", disableSorting: true },
];

const Employee = () => {
  const [records, setRecords] = useState(employeeService.getAllEmployees());
  console.log("first", records);
  const { TblContainer, TblHead, TblPagination, recordsAfterPaginAndSorting } = useTable(records, headCells);

  return (
    <Box>
      <Paper sx={{ margin: 5, padding: 3 }}>
        <EmployeeForm />
        <TblContainer>
          <TblHead />
          <TableBody>
            {recordsAfterPaginAndSorting().map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.fullName}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.mobile}</TableCell>
                <TableCell>{item.department}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TblContainer>
        <TblPagination />
      </Paper>
    </Box>
  );
};

export default Employee;
