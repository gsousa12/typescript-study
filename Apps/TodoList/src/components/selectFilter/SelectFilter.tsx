import { FormControl, MenuItem, Select } from "@mui/material";

function SelectFilter() {
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <Select
        value={""}
        onChange={() => {}}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"all"}>All</MenuItem>
        <MenuItem value={"incomplete"}>Incomplete</MenuItem>
        <MenuItem value={"complete"}>Complete</MenuItem>
      </Select>
    </FormControl>
  );
}

export default SelectFilter;
