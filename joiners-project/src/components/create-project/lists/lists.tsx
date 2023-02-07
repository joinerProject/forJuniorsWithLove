import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
// import languagesJson from '../../../utils/languages.json';
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
type langsMap = Record<number, object>;

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];
type languagesObj = {
  objectId: string;
  ProgrammingLanguage: string;
  Source: string;
};

type limits = {
  min: number;
  max: number;
};
export default function DataGridDemo() {
  const [langsState, setLangsState] = useState<languagesObj[]>();
  const [minAndMax, setMinAndMax] = useState<limits>();
  const fetchLangs = async (limits: limits) => {
    console.log("limits", limits);
    await fetch(
      `https://parseapi.back4app.com/classes/All_Programming_Languages?skip=${limits.min}&limit=${limits.max}`,
      {
        headers: {
          "X-Parse-Application-Id": "XpRShKqJcxlqE5EQKs4bmSkozac44osKifZvLXCL",
          "X-Parse-Master-Key": "Mr2UIBiCImScFbbCLndBv8qPRUKwBAq27plwXVuv",
        },
      }
    ).then(async (response) => {
      const res = await response.json();
      console.log("langsState", res.results);
      setLangsState(res.results);
      const newLimits = { min: minAndMax.min + 10, max: minAndMax.max + 10 };
      console.log("new limits", newLimits);
      setMinAndMax(newLimits);
    });
  };
  useEffect(() => {
    fetchLangs({ min: 0, max: 10 });
    setMinAndMax({ min: 10, max: 20 });
  }, []);
  return (
    langsState && (
      <Box sx={{ height: 400, width: "100%" }}>
        {/* <DataGrid
        rows={langsState}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      /> */}
        {langsState.map((lang) => (
          <h2 key={lang.objectId}>{lang.ProgrammingLanguage}</h2>
        ))}
        <Button
          onClick={() => {
            fetchLangs(minAndMax);
          }}
        >
          Fetch more
        </Button>
      </Box>
    )
  );
}
