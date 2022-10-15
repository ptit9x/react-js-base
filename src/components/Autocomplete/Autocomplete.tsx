import {
  Box,
  TextField,
  Typography,
  Autocomplete as MuiAutocomplete
} from "@mui/material";

import theme from "src/theme";

interface AutocompleteProps {
  sx?: any;
  label: string;
  fullWidth?: boolean;
  disableClearable?: boolean;
  options: Token[];
  inputValue: Token | null;
  onChange: (e: React.SyntheticEvent, value: Token | null) => void;
}

const Autocomplete = ({
  sx,
  label,
  fullWidth,
  options,
  inputValue,
  disableClearable,
  onChange
}: AutocompleteProps) => {
  return (
    <MuiAutocomplete
      sx={sx}
      disablePortal
      autoHighlight
      fullWidth={fullWidth}
      disableClearable={disableClearable}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      value={inputValue}
      onChange={onChange}
      options={options}
      groupBy={option => option.group ?? ""}
      getOptionLabel={option => option.symbol.toUpperCase()}
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
          minWidth={theme.spacing(31.5)}
          position="relative"
          display="flex"
          {...props}
        >
          <img loading="lazy" width="24" src={option.image} alt="icon" />
          <Box>
            <Typography
              fontSize={theme.spacing(1.75)}
              textTransform="uppercase"
            >
              {option.symbol}
            </Typography>
            {option.name && (
              <Typography
                fontSize={theme.spacing(1.5)}
                color={theme.palette.gray.A700}
              >
                {option.name}
              </Typography>
            )}
          </Box>
          {option.current_price && (
            <Typography
              fontSize={theme.spacing(1.75)}
              sx={{ position: "absolute", right: "24px" }}
            >
              ${option.current_price}
            </Typography>
          )}
        </Box>
      )}
      renderInput={params => (
        <TextField
          {...params}
          label={label}
          inputProps={{
            ...params.inputProps,
            autoComplete: ""
          }}
        />
      )}
    />
  );
};

export default Autocomplete;
