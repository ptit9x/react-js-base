import CloseIcon from "@mui/icons-material/Close";
import { Box, Dialog, Fade, IconButton } from "@mui/material";
import theme from "src/theme";

interface ModalProps {
  modalWidth?: string;
  shouldModalOpen: boolean;
  handleModalClose(): void;
  children: React.ReactNode;
}

const Modal = ({
  modalWidth,
  shouldModalOpen,
  handleModalClose,
  children
}: ModalProps) => {
  return (
    <Dialog
      open={shouldModalOpen}
      onClose={handleModalClose}
      closeAfterTransition
      BackdropProps={{
        timeout: 300
      }}
    >
      <Fade in={shouldModalOpen}>
        <Box
          borderRadius="4px"
          bgcolor="background.default"
          width={modalWidth ?? theme.spacing(51.25)}
          px={4}
          py={3}
        >
          <IconButton
            onClick={handleModalClose}
            sx={{ position: "absolute", top: 6, right: 6 }}
          >
            <CloseIcon htmlColor={theme.palette.gray.A700} />
          </IconButton>

          {children}
        </Box>
      </Fade>
    </Dialog>
  );
};

export default Modal;
