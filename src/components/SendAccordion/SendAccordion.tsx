import React from "react";
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Autocomplete,
  Box,
  TextField,
  Grid
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutlineOutlined";
import { PrimaryTypo } from "src/pages/SendToken/SendToken.styled";
import { useTranslation } from "react-i18next";

interface SendAccordionProps {
  gasLimit: number | undefined;
  addData: string | undefined;
}

const SendAccordion = ({
  gasLimit = 21000,
  addData = "0x"
}: SendAccordionProps) => {
  const { t } = useTranslation();
  return (
    <Accordion sx={{ backgroundColor: "#fff", border: "1px solid #c4c4c4" }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Grid
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          sx={{ width: "100%" }}
        >
          <Typography variant="body1" fontWeight="bold" textTransform="none">
            {t("sendPage.send-accordion.advanced")}
          </Typography>
          <Typography
            variant="body2"
            color="#5e6b8d"
            textAlign="end"
            textTransform="none"
          >
            {t("sendPage.send-accordion.gas")}
          </Typography>
        </Grid>
      </AccordionSummary>
      <AccordionDetails>
        <Box
          p="20px"
          mb="10px"
          borderRadius="10px"
          style={{ background: "#fff2dc" }}
        >
          <Typography
            variant="body2"
            fontWeight="bold"
            alignItems="center"
            display="flex"
          >
            <ErrorOutlineIcon />
            <p style={{ marginLeft: "10px" }}>
              {t("sendPage.send-accordion.advanced-users-only")}
            </p>
          </Typography>
          <Typography variant="body2" color="#5e6b8d">
            {" "}
            {t("sendPage.send-accordion.not-edit-fields")}
          </Typography>
        </Box>
        <PrimaryTypo variant="body2" textAlign="end" mb="20px">
          {" "}
          {t("sendPage.send-accordion.reset")}: 21,000
        </PrimaryTypo>

        <Autocomplete
          disablePortal
          id="combo-box-gas"
          options={[]}
          sx={{ width: "100%", mb: "20px" }}
          value={gasLimit}
          renderInput={params => (
            <TextField
              {...params}
              label={t("sendPage.send-accordion.gas-limit")}
            />
          )}
        />

        <Autocomplete
          disablePortal
          id="combo-box-add"
          options={[]}
          value={addData}
          sx={{ width: "100%", mb: "20px" }}
          renderInput={params => (
            <TextField
              {...params}
              label={t("sendPage.send-accordion.add-data")}
            />
          )}
        />
      </AccordionDetails>
    </Accordion>
  );
};

export default SendAccordion;
