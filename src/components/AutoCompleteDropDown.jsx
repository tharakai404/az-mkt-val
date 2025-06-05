import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

function AutoCompleteDropDown({ name, top100Films = [], value, onValueChange }) {
  return (
    <Autocomplete
      disablePortal
      options={top100Films}
      getOptionLabel={(option) => typeof option === 'string' ? option : option.label || ''}
      isOptionEqualToValue={(option, value) => option?.value === value?.value}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label={name} />}
    //  value={value}
      onChange={(event, newValue) => {
        if (onValueChange) {
          onValueChange(newValue); // Trigger parent method
        }
      }}
    />
  );
}

export default AutoCompleteDropDown;
