import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  TextField,
  Box,
  Grid
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutlineOutlined";
import { useTranslation } from "react-i18next";
import theme from "src/theme";

interface SendAccordionProps {
  gasLimit?: number;
  addData?: string;
}

const SendAccordion = ({
  gasLimit = 21000,
  addData = "0x"
}: SendAccordionProps) => {
  const { t } = useTranslation();

  return (
    <Accordion
      elevation={0}
      sx={{
        backgroundColor: theme.palette.common.white,
        border: "1px solid #c4c4c4"
      }}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />} id="panel1a-header">
        <Grid
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          <Typography variant="body1" fontWeight="bold">
            {t("advanced")}
          </Typography>
          <Typography
            variant="body2"
            color={theme.palette.blueGrey.A100}
            textAlign="end"
          >
            {t("gas")}
          </Typography>
        </Grid>
      </AccordionSummary>

      <AccordionDetails>
        <Box p={2.5} mb={3.5} borderRadius="10px" bgcolor="#fff2dc">
          <Box alignItems="center" display="flex" mb={1.5}>
            <ErrorOutlineIcon
              fontSize="small"
              htmlColor={theme.palette.blueGrey.A100}
            />
            <Typography
              fontWeight="bold"
              color={theme.palette.blueGrey.A100}
              fontSize={theme.spacing(1.75)}
              sx={{ ml: 1 }}
            >
              {t("advanced-users-only")}
            </Typography>
          </Box>
          <Typography variant="body2" color={theme.palette.blueGrey.A100}>
            {t("not-edit-fields")}
          </Typography>
        </Box>

        <Typography color="primary" variant="body2" textAlign="end" mb={1.5}>
          {t("reset")}: 21,000
        </Typography>

        <TextField
          value={gasLimit}
          sx={{ width: "100%", mb: 2.5 }}
          label={t("gas-limit")}
        />

        <TextField
          value={addData}
          sx={{ width: "100%", mb: 2.5 }}
          label={t("add-data")}
        />
      </AccordionDetails>
    </Accordion>
  );
};

export default SendAccordion;
