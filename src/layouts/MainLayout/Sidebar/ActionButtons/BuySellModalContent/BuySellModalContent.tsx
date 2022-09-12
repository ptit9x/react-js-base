import theme from "src/theme";
import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import SellTabPanel from "./SellTabPanel";
import BuyTabPanel from "./BuyTabPanel";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = ({ children, value, index, ...other }: TabPanelProps) => (
  <div
    role="tabpanel"
    hidden={value !== index}
    id={`tabpanel-${index}`}
    aria-labelledby={`tab-${index}`}
    {...other}
  >
    {value === index && <Box mt={4}>{children}</Box>}
  </div>
);

const BuySellModalContent = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState(0);

  const handleTabChange = (_e: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box width="100%">
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleTabChange}>
          <Tab
            label={t("buy")}
            sx={{
              fontSize: theme.spacing(2.5),
              fontWeight: 600,
              textTransform: "none"
            }}
          />
          <Tab
            label={t("sell")}
            sx={{
              fontSize: theme.spacing(2.5),
              fontWeight: 600,
              textTransform: "none"
            }}
          />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <BuyTabPanel />
      </TabPanel>

      <TabPanel value={value} index={1}>
        <SellTabPanel />
      </TabPanel>
    </Box>
  );
};

export default BuySellModalContent;
