import {
  Box,
  TextField,
  Typography,
  Autocomplete as MuiAutocomplete
} from "@mui/material";
import theme from "src/theme";

export interface Option {
  group?: string;
  label: string;
  icon: string;
  text?: string;
  price?: number;
}

interface AutocompleteProps {
  sx?: any;
  label: string;
  fullWidth?: boolean;
  disableClearable?: boolean;
  options: Option[];
  inputValue: Option | null;
  onChange: (e: React.SyntheticEvent, value: Option | null) => void;
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
      value={inputValue}
      onChange={onChange}
      options={options}
      groupBy={option => option.group ?? ""}
      getOptionLabel={option => option.label}
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
          position="relative"
          display="flex"
          {...props}
        >
          <img loading="lazy" width="24" src={option.icon} alt="option-icon" />
          <Box>
            <Typography fontSize={theme.spacing(1.75)}>
              {option.label}
            </Typography>
            {option.text && (
              <Typography
                fontSize={theme.spacing(1.5)}
                color={theme.palette.gray.A700}
              >
                {option.text}
              </Typography>
            )}
          </Box>
          {option.price && (
            <Typography
              fontSize={theme.spacing(1.75)}
              sx={{ position: "absolute", right: "24px" }}
            >
              ${option.price}
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
