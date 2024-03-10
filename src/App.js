import React, { useState, useEffect, useCallback, useTransition } from "react";
import { Container, Grid, Typography, Paper } from "@mui/material";
import { Filter } from "./components/Filter";
import { Services } from "./components/Services";
import { SERVICE_DATA } from "./utils/constant";

function App() {
  const [isPending, setTransition] = useTransition();
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [tableData, setTableData] = useState([]);

  const handleDropdown = useCallback(
    (value, type) => {
      type === "category" ? setCategory(value) : setSubCategory(value);
    },
    [category, subCategory]
  );

  useEffect(() => {
    setTransition(() => {
      let storeData = [];
      if (category || subCategory) {
        storeData =
          SERVICE_DATA.length > 0 &&
          SERVICE_DATA.filter((ser) => {
            if (category && subCategory) {
              return (
                ser.category === category && ser.subcategory === subCategory
              );
            } else if (category) {
              return ser.category === category;
            } else if (subCategory) {
              return ser.subcategory === subCategory;
            }
          });
      }
      setTableData(storeData);
    });
  }, [category, subCategory]);

  return (
    <Container component={Paper} sx={{ paddingTop: 5, paddingBottom: 5 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Filter handleDropdown={handleDropdown} />
        </Grid>
        <Grid item xs={12}>
          {!isPending && tableData.length > 0 ? (
            tableData.map((list, index) => (
              <div key={index}>
                <Typography variant="h6" sx={{ fontSize: 14, padding: 2 }}>
                  {list.category} : {list.subcategory}
                </Typography>
                <Services headers={list.headers} services={list.services} />
              </div>
            ))
          ) : (
            <Typography variant="body1" align="center">
              {category || subCategory
                ? "No service available"
                : "Seach for services"}
              .
            </Typography>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
