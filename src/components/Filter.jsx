import React from "react";
import { TextField, Box } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { CATEGORIES, SUB_CATEGORIES } from "../utils/constant";

export const Filter = ({ handleDropdown }) => {
    console
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      width="100%"
    >
      <Autocomplete
        id="category-id"
        onChange={(event, newValue) => {
          let source = newValue?.category ?? "";
          handleDropdown(source, "category");
        }}
        options={CATEGORIES || []}
        getOptionLabel={(option) => option?.category}
        fullWidth
        renderInput={(params) => (
          <TextField
            {...params}
            required
            label="Category"
            variant="outlined"
            size="small"
            sx={{ mb: 2 }}
          />
        )}
      />

      <Autocomplete
        id="sub-category-id"
        onChange={(event, newValue) => {
          let source = newValue?.subcategory ?? "";
          handleDropdown(source, "sub-category");
        }}
        options={SUB_CATEGORIES || []}
        getOptionLabel={(option) => option.subcategory}
        fullWidth
        renderInput={(params) => (
          <TextField
            {...params}
            required
            label="Sub-Category"
            variant="outlined"
            size="small"
          />
        )}
      />
    </Box>
  );
};
