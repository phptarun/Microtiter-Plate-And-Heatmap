// import React from 'react';
// import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

// const MetricSelector = ({ metrics, selectedMetric, onSelectMetric }) => (
//     <FormControl>
//         <InputLabel>Metric</InputLabel>
//         <Select value={selectedMetric} onChange={(e) => onSelectMetric(e.target.value)}>
//             {metrics.map((metric) => (
//                 <MenuItem key={metric} value={metric}>
//                     {metric}
//                 </MenuItem>
//             ))}
//         </Select>
//     </FormControl>
// );

import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import uniqueID from "../utils/utils";

const MetricSelector = ({ metrics, selectedMetric, onSelectMetric }) => {
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">
        Select a metric{" "}
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={selectedMetric}
        onChange={(e) => onSelectMetric(e.target.value)}
      >
        <FormControlLabel
          key={uniqueID()}
          value={metrics[0]}
          control={<Radio />}
          label="All"
        />
        {metrics.map(
          (metric, index) =>
            index > 0 && (
              <FormControlLabel
                key={uniqueID()}
                value={metric}
                control={<Radio />}
                label={metric}
              />
            )
        )}
      </RadioGroup>
    </FormControl>
  );
};

export default MetricSelector;
